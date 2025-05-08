import { useFlags } from "@flags-gg/react-library";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import {MoonIcon, SunIcon, SunMoonIcon} from "lucide-react";
import {themeAtom} from "~/lib/state";
import {useAtom} from "jotai";

export const Theme = () => {
  const {is} = useFlags();
  const [_, setTheme] = useAtom(themeAtom)

  if (!is("darkmode").enabled()) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SunMoonIcon className={"cursor-pointer"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem className={"cursor-pointer"} onClick={() => setTheme("light")}>
          <SunIcon />&nbsp; Light
        </DropdownMenuItem>
        <DropdownMenuItem className={"cursor-pointer"} onClick={() => setTheme("dark")}>
          <MoonIcon />&nbsp; Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}