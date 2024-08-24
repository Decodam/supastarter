import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Book, Palette, Zap, Rocket, ChevronRight, Heart } from "lucide-react"
import { ThemeToggleIconButton } from "@/components/ui/theme";

export default function Home() {
  const user = false;

  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-background"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(117,248,124,0.5)] dark:bg-[rgba(117,248,124,0.2)] opacity-50 blur-[80px]"></div></div>
      
      <nav className="container h-16 flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        </Link>


        <div className="flex items-center gap-2">
          {(user) ? (
            <>

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}

          <ThemeToggleIconButton />
        </div>
      </nav>
      
      <div className="container pt-16 pb-24 lg:pb-32">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 transition border hover:bg-muted/40 text-sm p-1 ps-3 rounded-full"
            target="_blank"
            href="https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app"
          >
            Supabase SSR - Read Docmentation
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
              <ChevronRight className="flex-shrink-0 w-4 h-4" />
            </span>
          </a>
        </div>
        

        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Supabase - Next Js Auth Starter Template
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">
            Get started with your next project within seconds with prebuilt authentication templates with supabase and shadcn-ui already setup!
          </p>
        </div>
        

        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"}>Get started</Button>
          <Button size={"lg"} variant={"outline"} asChild>
            <Link href="https://paper-dryosaurus-158.notion.site/Supastarter-73998669d8d545ee836d9deea1452adf?pvs=25">
              Read Docs
            </Link>
          </Button>
        </div>


        <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span className="text-sm text-muted-foreground">
            Components from:
          </span>
          <span className="text-sm font-bold">Shadcn-UI </span>
          <svg
            className="h-5 w-5 text-muted-foreground"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 13L10 3"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
          <a
            className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
            target="_blank"
            href="https://ui.shadcn.com/docs/installation/next"
          >
            Installation Guide
            <ChevronRight className="flex-shrink-0 w-4 h-4" />
          </a>
        </div>
      </div>



      <div className="container max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/10 ext-foreground">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-[#3ECF8E]" />
              Supabase Docs
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Learn about Supabase authentication and database features.
            </CardDescription>
          </CardHeader>
          <Button variant="ghost" className="ml-6 mb-4" asChild>
            <Link href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer">
              Explore Supabase
            </Link>
          </Button>
        </Card>

        <Card className="bg-card/10 text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2 h-5 w-5 text-[#3ECF8E]" />
              Next.js Docs
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Master the React framework for production-grade applications.
            </CardDescription>
          </CardHeader>
          <Button variant="ghost" className="ml-6 mb-4" asChild>
            <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Explore Next.js
            </Link>
          </Button>
        </Card>

        <Card className="bg-card/10 text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="mr-2 h-5 w-5 text-[#3ECF8E]" />
              shadcn/ui Docs
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Discover the customizable UI components for your project.
            </CardDescription>
          </CardHeader>
          <Button variant="ghost" className="ml-6 mb-4" asChild>
            <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
              Explore shadcn/ui
            </Link>
          </Button>
        </Card>

        <Card className="bg-card/10 text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2 h-5 w-5 text-[#3ECF8E]" />
              SupaStarter Kit
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Get started with our comprehensive starter kit documentation.
            </CardDescription>
          </CardHeader>
          <Button variant="ghost" className="ml-6 mb-4" asChild>
            <Link href="https://github.com/Decodam/supastarter#readme" target="_blank" rel="noopener noreferrer">
              Explore SupaStarter
            </Link>
          </Button>
        </Card>
      </div>


      <footer className="w-full mt-14">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-xs leading-loose text-muted-foreground md:text-left">
              Built with <Heart className="inline-block h-4 w-4 text-red-500" /> by{" "}
              <Link
                href="https://github.com/Decodam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                @Decodam
              </Link>
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <Link
              href="https://github.com/Decodam/supastarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium underline underline-offset-4"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              Project Repository
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Supastarter. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}