import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "ws",
    label: "workspace manager"
  },
  {
    value: "user",
    label: "user manager"
  },
  {
    value: "ge",
    label: "general manager"
  }
]

export function Combobox(props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("ws")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? frameworks.find(framework => framework.value === value)?.label
            : "Select Role"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search role..." />
          <CommandEmpty>No Role found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map(framework => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
