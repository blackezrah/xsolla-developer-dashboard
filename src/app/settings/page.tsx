export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md p-6 space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-accent-purple">Settings</h1>
          <p className="text-muted-foreground">
            Manage your preferences and dashboard customization.
          </p>
        </div>

        {/* Fake Settings Sections */}
        <div className="space-y-6">
          {/* Visual Customization */}
          <div>
            <h2 className="text-lg font-semibold text-accent-pink">Visual Customization</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>🌙 Theme: Light / Dark / High Contrast</li>
              <li>🎨 Accent Color: Pink / Blue / Green</li>
              <li>📐 Layout: Compact / Spacious</li>
            </ul>
          </div>

          {/* Content & Layout */}
          <div>
            <h2 className="text-lg font-semibold text-accent-green">Content & Layout</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>📊 Widget Control: Add/Remove/Rearrange</li>
              <li>🖥️ Custom Dashboards</li>
              <li>📁 Collapsible Panels</li>
            </ul>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-lg font-semibold text-accent-blue">Notifications & Alerts</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>🔔 Custom Alert Rules</li>
              <li>📩 Notification Channels: Email / Slack</li>
              <li>⏱️ Frequency: Real-time / Digest</li>
            </ul>
          </div>

          {/* Localization */}
          <div>
            <h2 className="text-lg font-semibold text-accent-amber">Localization & Accessibility</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>🌍 Language Selection</li>
              <li>🕒 Timezone & Currency Formatting</li>
              <li>⌨️ Keyboard Shortcuts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
