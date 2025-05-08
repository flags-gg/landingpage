import { useFlags } from "@flags-gg/react-library"
import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card"

export const HowItWorks = () => {
  const {is} = useFlags()
  is("tester").initialize(false)

  if (!is("how it works").enabled()) return null

  return (
    <section id="how-it-works" className="py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple to implement, powerful to use
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Get up and running with feature flags in minutes, not days.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="install">1. Install the SDK</TabsTrigger>
              <TabsTrigger value="create">2. Create Flags</TabsTrigger>
              <TabsTrigger value="implement">3. Implement in Code</TabsTrigger>
              <TabsTrigger value={"secretmenu"}>4. Secret Menu</TabsTrigger>
            </TabsList>
            <TabsContent value="install" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Install the SDK</CardTitle>
                  <CardDescription>
                    Add our lightweight SDK to your application with a single command.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-4 w-full">
                    <code className="text-sm">npm install @flags-gg/react-library</code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="create" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Create Flags</CardTitle>
                  <CardDescription>Define your feature flags in our dashboard with a few clicks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-4 w-full">
                    Alternatively if you want an offline flag <br />
                    <code className="text-sm">is("tester").initialize(false)</code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="implement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Implement in Code</CardTitle>
                  <CardDescription>
                    Use our simple API to check flag status and conditionally render features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-4 w-full">
                    <code className="text-sm">
                      {"if (is('newFeature').enabled()) {\n  // Show new feature\n}"}
                    </code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secretmenu" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Secret Menu</CardTitle>
                  <CardDescription>
                    You can choose a set of key presses to activate a secret menu (if you choose to enable secret menu).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-4 w-full">
                    You can see an example of this live by pressing B five times.
                    <img src={"/images/secretmenu.png"} alt={"Secret Menu"} width={200} height={220} className="mx-auto aspect-rectangle overflow-hidden rounded-xl object-scale-down h-220 w-200 object-center sm:w-fullimg" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}