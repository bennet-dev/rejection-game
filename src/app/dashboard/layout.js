import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Tagline from "@/components/tagline/tagline";
import ScoreBoard from "@/components/scoreboard/scoreboard";

const Layout = ({ children }) => (
    <div className=" min-h-screen bg-gray-100">
        <nav className="bg-white px-6 py-4 shadow">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-br from-gray-800  to-cyan-400">
                            malakcepto
                        </p>
                        <Tagline />
                    </div>

                </div>

                <div className="md:flex hidden">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Avatar>
                                <AvatarFallback>
                                    BC
                                </AvatarFallback>
                            </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <ScoreBoard />
                        </HoverCardContent>
                    </HoverCard>

                </div>
            </div>
        </nav>
        <main className="mt-10" >
            <div className="container mx-auto px-6">
                {children}
            </div>
        </main>
    </div>
);


export default Layout;