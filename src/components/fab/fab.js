"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";


const Fab = ({ children, tooltip }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild
            >
                <div>
                    {children}
                </div>
            </TooltipTrigger>
            <TooltipContent>
                {tooltip}
            </TooltipContent>
        </Tooltip>

    </TooltipProvider>
);

export default Fab;