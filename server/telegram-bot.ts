import { Telegraf, Markup } from "telegraf"
import { addOrder, getVPNConfigs, updateOrderStatus, getOrders } from "../lib/db"

// VPN Clients URLs
const vpnClients = {
  android: "https://play.google.com/store/apps/details?id=uk.connectix.app",
  windows: "https://apps.irancdn.org/windows/Connectix-2.2.0.zip",
  mac: "https://apps.irancdn.org/mac/Connectix-2.2.0-Mac.zip",
}

export function startTelegramBot(botToken: string, adminId: string) {
  if (!botToken) {
    console.error("BOT_TOKEN is not defined")
    return null
  }

  const bot = new Telegraf(botToken)

  // Bot commands
  bot.command("start", async (ctx) => {
    const welcomeMessage = `
🌟 به Mr.Gnome VPN Bot خوش آمدید! 🌟
ما خدمات VPN با کیفیت بالا را با:
• اتصالات سریع و قابل اعتماد
• پشتیبانی از چند دستگاه
• مرور امن و خصوصی
• پشتیبانی 24 ساعته مشتری 📞
برای مشاهده بسته های موجود ما از /plans استفاده کنید.
از /clients برای دانلود کلاینت های VPN برای دستگاه های خود استفاده کنید.
`

    await ctx.reply(
      welcomeMessage,
      Markup.keyboard([
        ["📦 View Plans"],
        ["📱 Download Clients", "💳 Payment Status"],
        ["📱 Support", "❓ FAQ"],
      ]).resize(),
    )
  })

  // Handle plans command and button
  bot.command("plans", showPlans)
  bot.hears("📦 View Plans", showPlans)

  async function showPlans(ctx: any) {
    const plans = await getVPNConfigs()
    const inlineKeyboard = plans.map((plan: any) => [
      Markup.button.callback(`${plan.name} - ${plan.price}T`, `plan_${plan.id}`),
    ])

    await ctx.reply("🌟 طرح VPN خود را انتخاب کنید:", Markup.inlineKeyboard(inlineKeyboard))
  }

  // Handle clients command and button
  bot.command("clients", sendClientsInfo)
  bot.hears("📱 Download Clients", sendClientsInfo)

  async function sendClientsInfo(ctx: any) {
    const clientMessage = `
📱 دانلودهای مشتری VPN
مشتری VPN ما را برای دستگاه خود بارگیری کنید:
🤖 اندروید: ${vpnClients.android}
💻 ویندوز: ${vpnClients.windows}
🍏 macOS: ${vpnClients.mac}
⚠️ مهم: قبل از استفاده از سرویس VPN مطمئن شوید که کلاینت صحیح دستگاه خود را دانلود و نصب کنید.
به کمک نیاز دارید؟ با تیم پشتیبانی ما تماس بگیرید!
`
    await ctx.reply(clientMessage)
  }

  // Handle support button
  bot.hears("📱 Support", async (ctx) => {
    await ctx.reply("Need help? Contact our support:\n📧 Email: bodapoor5@gmail.com\n💬 Telegram: @firstgnome")
  })

  // Handle FAQ button
  bot.hears("❓ FAQ", async (ctx) => {
    await ctx.reply(
      `❓ سوالات متداول\nسؤال: چگونه به VPN متصل شوم؟ پاسخ: 1. مشتری VPN مناسب را برای دستگاه خود دانلود کنید (دستور کلاینت/) 2. کلاینت را نصب کنید 3. اعتبارنامه هایی را که پس از تأیید پرداخت ارسال خواهیم کرد را وارد کنید. 4. متصل شوید و از مرور ایمن لذت ببرید!`,
    )
  })

  // Handle plan selection
  bot.action(/plan_(.+)/, async (ctx: any) => {
    const planId = ctx.match[1]
    const plans = await getVPNConfigs()
    const plan = plans.find((p: any) => p.id === planId)

    if (!plan) {
      return ctx.reply("Plan not found.")
    }

    const orderMessage = `
📦 Order Details:
Plan: ${plan.name}
${plan.details}
Price: ${plan.price}T
لطفاً  عکس از  رسید پرداخت خود (فقط بانک، برای تماس با پشتیبانی  تماس بگیرید @firstgnome ) ارسال کنید.
شماره کارت جهت واریز:
5859831207627083

تجارت بانک

پس از تأیید پرداخت شما، اعتبار VPN خود را دریافت خواهید کرد.
⚠️ مهم: مطمئن شوید که مشتری VPN را برای دستگاه(های) خود با استفاده از دستور /clients دانلود کرده اید.
`

    // Store order in database
    const orderId = Date.now().toString()
    const order = {
      id: orderId,
      userId: ctx.from.id,
      username: ctx.from.username,
      config: plan,
      status: "pending",
      timestamp: new Date().toISOString(),
    }

    await addOrder(order)

    const adminMessage = `
🔔 New Order Alert!
User ID: ${ctx.from.id}
Plan: ${plan.name}
Amount: ${plan.price}T
Status: Pending Payment
`

    try {
      await ctx.telegram.sendMessage(adminId, adminMessage)
      await ctx.reply(orderMessage)
    } catch (error) {
      console.error("Error processing order:", error)
      await ctx.reply("Sorry, there was an error processing your order. Please try again later.")
    }
  })

  // Handle payment photos
  bot.on("photo", async (ctx: any) => {
    const photo = ctx.message.photo[ctx.message.photo.length - 1]
    try {
      // Get the latest pending order for this user
      const orders = await getOrders()
      const userOrders = orders
        .filter((o: any) => o.userId === ctx.from.id && o.status === "pending")
        .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

      const order = userOrders[0]

      if (!order) {
        return ctx.reply("No pending orders found.")
      }

      // Forward to admin
      await ctx.telegram.forwardMessage(adminId, ctx.chat.id, ctx.message.message_id)
      await ctx.telegram.sendMessage(
        adminId,
        `💳 Payment Confirmation Received\nFrom User: ${ctx.from.id}\nOrder Details: ID: ${order.id}\nPlan: ${order.config.name}\nAmount: ${order.config.price}T`,
        Markup.inlineKeyboard([
          [Markup.button.callback("✅ Complete Order", `complete_order_${ctx.from.id}_${order.id}`)],
        ]),
      )

      await ctx.reply("✅ ممنون تایید پرداخت شما دریافت شده و در حال بررسی است.")
    } catch (error) {
      console.error("Error handling payment confirmation:", error)
      await ctx.reply(
        "Sorry, there was an error processing your payment confirmation. Please try again or contact support.",
      )
    }
  })

  // Handle order completion
  bot.action(/complete_order_(.+)_(.+)/, async (ctx: any) => {
    if (ctx.from.id.toString() !== adminId) {
      return ctx.answerCallbackQuery("⚠️ Only admin can complete orders!")
    }

    const [userId, orderId] = ctx.match.slice(1)
    try {
      // Update order status
      await updateOrderStatus(orderId, "completed")

      await ctx.editMessageText(
        "✅سفارش به عنوان تکمیل شده علامت گذاری شد! اکنون می توانید اعتبار VPN را برای کاربر ارسال کنید.",
      )
      await ctx.telegram.sendMessage(
        userId,
        "✅ سفارش شما تکمیل شد لطفا صبر کنید تا مدیر اعتبار VPN شما را برای شما ارسال کندs.",
      )
    } catch (error) {
      console.error("Error completing order:", error)
      await ctx.answerCallbackQuery({
        text: "❌ Error updating order status. Please try again.",
        show_alert: true,
      })
    }
  })

  // Start bot
  bot
    .launch()
    .then(() => console.log("Telegram bot started successfully"))
    .catch((err) => console.error("Error starting Telegram bot:", err))

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"))
  process.once("SIGTERM", () => bot.stop("SIGTERM"))

  return bot
}

