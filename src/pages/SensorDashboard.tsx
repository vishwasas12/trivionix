import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";
import { 
  Thermometer, 
  Droplets, 
  Gauge, 
  Zap, 
  ArrowLeft,
  Activity,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

interface SensorData {
  timestamp: string;
  temperature: number;
  humidity: number;
  pressure: number;
  voltage: number;
}

const SensorDashboard = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  // Simulate real-time data fetching (replace with actual MySQL connection)
  useEffect(() => {
    const generateMockData = () => {
      const now = new Date();
      const newData: SensorData = {
        timestamp: now.toLocaleTimeString(),
        temperature: 20 + Math.random() * 15 + Math.sin(now.getTime() / 10000) * 5,
        humidity: 40 + Math.random() * 30 + Math.cos(now.getTime() / 8000) * 10,
        pressure: 1000 + Math.random() * 50 + Math.sin(now.getTime() / 12000) * 20,
        voltage: 3.2 + Math.random() * 0.8 + Math.cos(now.getTime() / 15000) * 0.2
      };
      
      setSensorData(prev => {
        const updated = [...prev, newData];
        return updated.slice(-20); // Keep last 20 readings
      });
    };

    // Simulate connection
    const connectTimer = setTimeout(() => setIsConnected(true), 2000);
    
    // Generate initial data
    for (let i = 0; i < 10; i++) {
      setTimeout(() => generateMockData(), i * 200);
    }

    // Set up real-time updates
    const interval = setInterval(generateMockData, 3000);

    return () => {
      clearTimeout(connectTimer);
      clearInterval(interval);
    };
  }, []);

  const currentData = sensorData[sensorData.length - 1];

  const getStatusColor = (value: number, min: number, max: number) => {
    if (value < min || value > max) return "text-destructive";
    return "text-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">IoT Sensor Dashboard</h1>
                <p className="text-muted-foreground">Real-time monitoring of environmental sensors</p>
              </div>
              <div className="flex items-center gap-2">
                <Activity className={`w-5 h-5 ${isConnected ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
                <span className={isConnected ? 'text-primary' : 'text-muted-foreground'}>
                  {isConnected ? 'Connected' : 'Connecting...'}
                </span>
              </div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getStatusColor(currentData?.temperature || 0, 18, 35)}`}>
                  {currentData?.temperature?.toFixed(1) || '--'}°C
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  Normal range
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getStatusColor(currentData?.humidity || 0, 30, 70)}`}>
                  {currentData?.humidity?.toFixed(1) || '--'}%
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  Optimal range
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pressure</CardTitle>
                <Gauge className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getStatusColor(currentData?.pressure || 0, 990, 1030)}`}>
                  {currentData?.pressure?.toFixed(0) || '--'} hPa
                </div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                  Stable
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Battery</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getStatusColor(currentData?.voltage || 0, 3.0, 4.2)}`}>
                  {currentData?.voltage?.toFixed(2) || '--'}V
                </div>
                <p className="text-xs text-muted-foreground">
                  {currentData?.voltage && currentData.voltage < 3.3 ? (
                    <>
                      <AlertTriangle className="inline w-3 h-3 mr-1 text-destructive" />
                      Low battery
                    </>
                  ) : (
                    <>
                      <TrendingUp className="inline w-3 h-3 mr-1" />
                      Good
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Temperature Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Temperature Trend</CardTitle>
                <CardDescription>Real-time temperature readings over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="timestamp" 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary) / 0.2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Humidity Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Humidity Levels</CardTitle>
                <CardDescription>Humidity percentage over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="timestamp" 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="humidity" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pressure Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Atmospheric Pressure</CardTitle>
                <CardDescription>Pressure readings in hPa</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sensorData.slice(-10)}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="timestamp" 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar 
                      dataKey="pressure" 
                      fill="hsl(var(--primary) / 0.8)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Battery Voltage Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Battery Voltage</CardTitle>
                <CardDescription>System power monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="timestamp" 
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis 
                      domain={[2.5, 4.5]}
                      tick={{ fontSize: 12 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="voltage" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Info Card */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Database Connection</CardTitle>
              <CardDescription>
                This dashboard displays simulated sensor data. To connect to your MySQL server:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                1. Replace the mock data generation with actual MySQL queries
              </p>
              <p className="text-sm text-muted-foreground">
                2. Configure your database connection string in the backend
              </p>
              <p className="text-sm text-muted-foreground">
                3. Set up real-time data streaming using WebSockets or Server-Sent Events
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SensorDashboard;