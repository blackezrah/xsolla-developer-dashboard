"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Play, RotateCcw, Save, TrendingUp, DollarSign, Users, Target, Zap, AlertTriangle } from "lucide-react"

interface SimulationParams {
  budget: number
  duration: number
  channels: {
    email: number
    social: number
    events: number
    content: number
    webinars: number
  }
  regions: {
    na: number
    eu: number
    apac: number
    latam: number
  }
  eventTypes: {
    meetups: number
    workshops: number
    hackathons: number
    conferences: number
  }
}

interface SimulationResults {
  projectedReach: number
  estimatedConversions: number
  costPerConversion: number
  roi: number
  engagementScore: number
  riskLevel: string
  recommendations: string[]
  channelBreakdown: Array<{
    channel: string
    reach: number
    conversions: number
    cost: number
    efficiency: number
  }>
  timeline: Array<{
    week: string
    reach: number
    conversions: number
    engagement: number
  }>
}

const defaultParams: SimulationParams = {
  budget: 50000,
  duration: 12,
  channels: {
    email: 30,
    social: 25,
    events: 20,
    content: 15,
    webinars: 10,
  },
  regions: {
    na: 40,
    eu: 30,
    apac: 20,
    latam: 10,
  },
  eventTypes: {
    meetups: 40,
    workshops: 30,
    hackathons: 20,
    conferences: 10,
  },
}

const channelEfficiency = {
  email: { reach: 0.8, conversion: 0.12, cost: 0.3 },
  social: { reach: 1.2, conversion: 0.08, cost: 0.4 },
  events: { reach: 0.4, conversion: 0.25, cost: 1.0 },
  content: { reach: 0.6, conversion: 0.15, cost: 0.5 },
  webinars: { reach: 0.5, conversion: 0.2, cost: 0.6 },
}

const regionMultipliers = {
  na: { reach: 1.0, conversion: 1.0, cost: 1.0 },
  eu: { reach: 0.9, conversion: 0.95, cost: 1.1 },
  apac: { reach: 1.2, conversion: 0.85, cost: 0.8 },
  latam: { reach: 1.1, conversion: 0.9, cost: 0.7 },
}

export function CampaignSimulatorModule() {
  const [params, setParams] = useState<SimulationParams>(defaultParams)
  const [results, setResults] = useState<SimulationResults | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [savedScenarios, setSavedScenarios] = useState<
    Array<{ name: string; params: SimulationParams; results: SimulationResults }>
  >([])

  const calculateResults = (simulationParams: SimulationParams): SimulationResults => {
    const { budget, duration, channels, regions } = simulationParams

    // Calculate channel breakdown
    const channelBreakdown = Object.entries(channels).map(([channel, percentage]) => {
      const channelBudget = (budget * percentage) / 100
      const efficiency = channelEfficiency[channel as keyof typeof channelEfficiency]

      const baseReach = channelBudget * efficiency.reach * 10
      const baseConversions = baseReach * efficiency.conversion
      const cost = channelBudget

      // Apply regional multipliers
      const regionAdjustedReach =
        baseReach *
        Object.entries(regions).reduce((acc, [region, regionPercentage]) => {
          const multiplier = regionMultipliers[region as keyof typeof regionMultipliers]
          return acc + (regionPercentage / 100) * multiplier.reach
        }, 0)

      const regionAdjustedConversions =
        baseConversions *
        Object.entries(regions).reduce((acc, [region, regionPercentage]) => {
          const multiplier = regionMultipliers[region as keyof typeof regionMultipliers]
          return acc + (regionPercentage / 100) * multiplier.conversion
        }, 0)

      return {
        channel: channel.charAt(0).toUpperCase() + channel.slice(1),
        reach: Math.round(regionAdjustedReach),
        conversions: Math.round(regionAdjustedConversions),
        cost: Math.round(cost),
        efficiency: regionAdjustedConversions / cost,
      }
    })

    const totalReach = channelBreakdown.reduce((sum, channel) => sum + channel.reach, 0)
    const totalConversions = channelBreakdown.reduce((sum, channel) => sum + channel.conversions, 0)
    const costPerConversion = budget / totalConversions
    const roi = (totalConversions * 150 - budget) / budget // Assuming $150 LTV per conversion

    // Generate timeline
    const timeline = Array.from({ length: duration }, (_, i) => {
      const week = `Week ${i + 1}`
      const progressFactor = (i + 1) / duration
      const reach = Math.round(totalReach * progressFactor * (0.7 + Math.random() * 0.6))
      const conversions = Math.round(totalConversions * progressFactor * (0.8 + Math.random() * 0.4))
      const engagement = Math.round(50 + Math.random() * 40)

      return { week, reach, conversions, engagement }
    })

    // Calculate engagement score
    const engagementScore = Math.round(
      (totalConversions / totalReach) * 1000 + (roi > 0 ? 20 : -10) + (duration > 8 ? 10 : -5),
    )

    // Determine risk level
    let riskLevel = "Low"
    if (costPerConversion > 200) riskLevel = "High"
    else if (costPerConversion > 100) riskLevel = "Medium"

    // Generate recommendations
    const recommendations = []
    if (costPerConversion > 150) {
      recommendations.push("Consider increasing email and content marketing allocation for better cost efficiency")
    }
    if (channels.events > 30) {
      recommendations.push("High event allocation may limit reach - consider balancing with digital channels")
    }
    if (roi < 0.5) {
      recommendations.push("ROI is below target - optimize channel mix or increase budget efficiency")
    }
    if (engagementScore < 60) {
      recommendations.push("Add more interactive content and webinars to boost engagement")
    }

    return {
      projectedReach: totalReach,
      estimatedConversions: totalConversions,
      costPerConversion: Math.round(costPerConversion),
      roi: Math.round(roi * 100) / 100,
      engagementScore,
      riskLevel,
      recommendations,
      channelBreakdown,
      timeline,
    }
  }

  const runSimulation = async () => {
    setIsSimulating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const simulationResults = calculateResults(params)
    setResults(simulationResults)
    setIsSimulating(false)
  }

  const resetToDefaults = () => {
    setParams(defaultParams)
    setResults(null)
  }

  const saveScenario = () => {
    if (results) {
      const name = `Scenario ${savedScenarios.length + 1}`
      setSavedScenarios([...savedScenarios, { name, params, results }])
    }
  }

  const updateChannelAllocation = (channel: string, value: number) => {
    setParams((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        [channel]: value,
      },
    }))
  }

  const updateRegionAllocation = (region: string, value: number) => {
    setParams((prev) => ({
      ...prev,
      regions: {
        ...prev.regions,
        [region]: value,
      },
    }))
  }

  const channelTotal = Object.values(params.channels).reduce((sum, val) => sum + val, 0)
  const regionTotal = Object.values(params.regions).reduce((sum, val) => sum + val, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaign Simulator</h1>
          <p className="text-muted-foreground">Simulate campaign scenarios and optimize your strategy</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={resetToDefaults} className="gap-2 bg-transparent">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          {results && (
            <Button variant="outline" onClick={saveScenario} className="gap-2 bg-transparent">
              <Save className="h-4 w-4" />
              Save Scenario
            </Button>
          )}
          <Button onClick={runSimulation} disabled={isSimulating} className="gap-2">
            <Play className="h-4 w-4" />
            {isSimulating ? "Simulating..." : "Run Simulation"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Parameters</CardTitle>
              <CardDescription>Configure your campaign settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Budget */}
              <div>
                <label className="text-sm font-medium mb-2 block">Budget: ${params.budget.toLocaleString()}</label>
                <Slider
                  value={[params.budget]}
                  onValueChange={([value]) => setParams((prev) => ({ ...prev, budget: value }))}
                  max={200000}
                  min={10000}
                  step={5000}
                  className="w-full"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="text-sm font-medium mb-2 block">Duration: {params.duration} weeks</label>
                <Slider
                  value={[params.duration]}
                  onValueChange={([value]) => setParams((prev) => ({ ...prev, duration: value }))}
                  max={24}
                  min={4}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Channel Allocation</CardTitle>
              <CardDescription>
                Distribute budget across channels ({channelTotal}%)
                {channelTotal !== 100 && (
                  <Badge variant="destructive" className="ml-2">
                    Must equal 100%
                  </Badge>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(params.channels).map(([channel, value]) => (
                <div key={channel}>
                  <label className="text-sm font-medium mb-2 block capitalize">
                    {channel}: {value}%
                  </label>
                  <Slider
                    value={[value]}
                    onValueChange={([newValue]) => updateChannelAllocation(channel, newValue)}
                    max={50}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Focus</CardTitle>
              <CardDescription>
                Target regions ({regionTotal}%)
                {regionTotal !== 100 && (
                  <Badge variant="destructive" className="ml-2">
                    Must equal 100%
                  </Badge>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(params.regions).map(([region, value]) => (
                <div key={region}>
                  <label className="text-sm font-medium mb-2 block">
                    {region.toUpperCase()}: {value}%
                  </label>
                  <Slider
                    value={[value]}
                    onValueChange={([newValue]) => updateRegionAllocation(region, newValue)}
                    max={60}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 space-y-6">
          {isSimulating && (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <div>
                    <h3 className="font-semibold">Running Simulation...</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyzing campaign parameters and calculating projections
                    </p>
                  </div>
                </div>
                <Progress value={75} className="mt-4" />
              </CardContent>
            </Card>
          )}

          {results && !isSimulating && (
            <>
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projected Reach</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{results.projectedReach.toLocaleString()}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Est. Conversions</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{results.estimatedConversions}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cost/Conversion</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${results.costPerConversion}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">ROI</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${results.roi > 0 ? "text-green-600" : "text-red-600"}`}>
                      {results.roi > 0 ? "+" : ""}
                      {results.roi}%
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Risk Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Assessment & Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant={
                        results.riskLevel === "Low"
                          ? "default"
                          : results.riskLevel === "Medium"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {results.riskLevel} Risk
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="font-medium">Engagement Score: {results.engagementScore}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="channels" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="channels">Channel Breakdown</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="comparison">Scenarios</TabsTrigger>
                </TabsList>

                <TabsContent value="channels">
                  <Card>
                    <CardHeader>
                      <CardTitle>Channel Performance Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={results.channelBreakdown}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="channel" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="conversions" fill="#D5006D" name="Conversions" />
                          <Bar dataKey="reach" fill="#FF4081" name="Reach" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="timeline">
                  <Card>
                    <CardHeader>
                      <CardTitle>Projected Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={results.timeline}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="week" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="reach" stroke="#D5006D" strokeWidth={2} name="Reach" />
                          <Line type="monotone" dataKey="conversions" stroke="#FF4081" strokeWidth={2} name="Conversions" />
                          <Line type="monotone" dataKey="engagement" stroke="#4B5563" strokeWidth={2} name="Engagement" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comparison">
                  <div className="space-y-4">
                    {savedScenarios.length === 0 ? (
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-muted-foreground">
                            No saved scenarios yet. Run and save simulations to compare results.
                          </p>
                        </CardContent>
                      </Card>
                    ) : (
                      savedScenarios.map((scenario, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              {scenario.name}
                              <Badge variant="outline">${scenario.params.budget.toLocaleString()}</Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="text-lg font-bold">
                                  {scenario.results.projectedReach.toLocaleString()}
                                </div>
                                <div className="text-xs text-muted-foreground">Reach</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-primary">
                                  {scenario.results.estimatedConversions}
                                </div>
                                <div className="text-xs text-muted-foreground">Conversions</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold">${scenario.results.costPerConversion}</div>
                                <div className="text-xs text-muted-foreground">Cost/Conv</div>
                              </div>
                              <div className="text-center">
                                <div
                                  className={`text-lg font-bold ${scenario.results.roi > 0 ? "text-green-600" : "text-red-600"}`}
                                >
                                  {scenario.results.roi > 0 ? "+" : ""}
                                  {scenario.results.roi}%
                                </div>
                                <div className="text-xs text-muted-foreground">ROI</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}

          {!results && !isSimulating && (
            <Card>
              <CardContent className="p-12 text-center">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to Simulate</h3>
                <p className="text-muted-foreground mb-4">
                  Configure your campaign parameters and click "Run Simulation" to see projected results.
                </p>
                <Button onClick={runSimulation} size="lg" className="gap-2">
                  <Play className="h-4 w-4" />
                  Run Your First Simulation
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
