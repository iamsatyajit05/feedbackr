import { toast } from 'react-hot-toast';
import { createProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateNewProject() {
    const handleSubmit = async (data: FormData) => {
        const projectName = data.get('name') as string;

        if (projectName.trim() === '') {
            toast.error('Project Name is required', { icon: '🚨' })
        } else {
            const saveProject = createProject(projectName);
            toast.promise(saveProject, {
                loading: 'Creating Project...',
                success: 'Project created successfully! 🎉',
                error: (err) => `${err.toString()}`,
            });

            saveProject
                .then((res) => {
                    if (res.success) {
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <Dialog>
            <DialogTrigger className='w-full text-left'>
                New Project
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>Don't worry, you'll be able to change project name later.</DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className='flex flex-col gap-2'>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="name" className="sr-only">
                                Project Name
                            </Label>
                            <Input
                                name="name"
                                placeholder="Project Name"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type='submit'>Create</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
