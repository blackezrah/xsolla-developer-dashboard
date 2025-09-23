// src/app/settings/page.tsx
'use client'

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="rounded-2xl bg-[rgba(15,23,42,0.7)] shadow-md p-6 space-y-8">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-accent-pink">Settings</h1>

        {/* Visual Customization */}
        <div>
          <h2 className="text-lg font-semibold text-accent-blue mb-2">
            Visual Customization
          </h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Theme options: Light / Dark / High-contrast / Colorblind-friendly</li>
            <li>• Accent colors: Choose your highlight color</li>
            <li>• Layout: Compact vs. Spacious mode</li>
          </ul>
        </div>

        {/* Content & Layout */}
        <div>
          <h2 className="text-lg font-semibold text-accent-green mb-2">
            Content & Layout
          </h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Widget control: Add, remove, or rearrange widgets</li>
            <li>• Custom dashboards for different roles</li>
            <li>• Collapsible panels for unused sections</li>
          </ul>
        </div>

        {/* Notifications & Alerts */}
        <div>
          <h2 className="text-lg font-semibold text-accent-amber mb-2">
            Notifications & Alerts
          </h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Custom alert rules (e.g. API error rate &gt; 2%)</li>
            <li>• Notification channels: Email, Slack, In-app</li>
            <li>• Frequency: Real-time vs. Digest</li>
          </ul>
        </div>

        {/* Localization & Accessibility */}
        <div>
          <h2 className="text-lg font-semibold text-purple-400 mb-4">
            Localization & Accessibility
          </h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Language selection</li>
            <li>• Timezone & currency formatting</li>
            <li>• Keyboard shortcuts & accessibility options</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
