"use client"

import { useEffect, useState } from "react";
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation";
import { CreateNewProject } from "./create-project";
import { getProjects } from "@/actions/project";

export function ComboboxDemo() {
    const router = useRouter();
    const [projects, setProjects] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        router.push(`/app/${value}`);
    }, [value]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await getProjects();

                if (error) {
                    return;
                }

                if (data.length === 0) {
                    return;
                }

                setProjects(data)

                const initialProject = location.pathname.split("/")[2];
                if (initialProject) {
                    setValue(initialProject);
                } else {
                    setValue(data[0].id);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchProjects();
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size={"sm"}
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select Department"
                    className="w-[200px] justify-between dark:text-white"
                >
                    {value
                        ? projects.find((project: any) => project.id === value)?.name
                        : "Select project..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No Project found.</CommandEmpty>
                        <CommandGroup>
                            {projects.map((project: any) => (
                                <CommandItem
                                    key={project.id}
                                    value={project.id}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    {project.name}
                                </CommandItem>
                            ))}
                            <CommandItem>
                                <CreateNewProject />
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
