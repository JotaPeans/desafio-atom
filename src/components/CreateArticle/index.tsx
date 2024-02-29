"use client"

import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import SubmitForm from "@/components/ui/SubmitForm";
import CreateArticleAction from "./actions/create";
import Modal from "@/components/ui/Modal";
import autoAnimate from "@formkit/auto-animate";

import { useEffect, useRef, useState } from "react";
import { ZodError, z } from "zod";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { green, red } from "tailwindcss/colors";

export interface ContentsProps {
    value: string
    type: "p"
}

// Schema do formulário de adição de um novo artigo
const ArticleSchema = z.object({
    imageUrl: z.string().nullable(),
    title: z.string().min(20),
    summary: z.string().min(20),
});

const CreateArticle = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [ proceed, setProceed ] = useState(false);

    const [ contents, setContents ] = useState<ContentsProps[]>([]);

    const titleRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLTextAreaElement>(null);
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    function verifyProceed() {
        try {
            // Faz a validação do formulário com zod
            ArticleSchema.parse({
                imageUrl: null,
                title: titleRef.current?.value,
                summary: summaryRef.current?.value,
            });

            setProceed(prev => !prev);
            
        } catch (error) {
            if(error instanceof ZodError) {
                // mapeia todos os erros e junta todos com uma quebra de linha para ser mostrado no alert
                const errors = error.errors.map(m => m.path[0] + ": " + m.message).join("\n");
                alert(errors);
            }
        }
    }

    async function handleFormAction(form: FormData) {
        try {
            // Faz a validação do formulário com zod
            ArticleSchema.parse({
                imageUrl: form.get("image") as string,
                title: form.get("title") as string,
                summary: form.get("summary") as string,
            });

            form.append("contents", JSON.stringify(contents));

            // chama a server action mandando todos os valores dos inputs do formulário.
            await CreateArticleAction(form);
            
            alert("Artigo criado com sucesso!");
            
        } catch (error) {
            if(error instanceof ZodError) {
                // mapeia todos os erros e junta todos com uma quebra de linha para ser mostrado no alert
                const errors = error.errors.map(m => m.path[0] + ": " + m.message).join("\n");
                alert(errors);
            }
        }
    }

    return (
        <Modal
            triggerText="Adicionar Artigo"
            classNames={{
                trigger: "max-w-fit mx-auto",
            }}
            onOpenChange={() => {
                // reseta os fields do formulário toda vez que o modal é aberto ou fechado.
                formRef.current?.reset();
                setProceed(false);
                setContents([]);
            }}
        >
            <h3 className="text-xl font-medium text-zinc-800 mx-4">Novo Artigo</h3>

            <form
                action={handleFormAction}
                ref={formRef}
                className="flex w-full h-full overflow-x-hidden flex-1"
            >   
                <div data-translate={proceed} aria-label="primeiro passo para criar um novo artigo" className="flex flex-col gap-2 p-4 min-w-full min-h-full transition-all data-[translate=true]:opacity-0 data-[translate=true]:hidden">

                    <label htmlFor="imageUrl" className="text-sm font-medium text-zinc-700">Url da imagem</label>
                    <Input id="imageUrl" name="image" placeholder="Url da imagem" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 w-full max-w-none"/>

                    <label htmlFor="title" className="text-sm font-medium text-zinc-700">Título do artigo</label>
                    <Input ref={titleRef} required id="title" name="title" placeholder="Título do artigo" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 w-full max-w-none"/>

                    <label htmlFor="summary" className="text-sm font-medium text-zinc-700 mt-2">Resumo do artigo</label>
                    <TextArea ref={summaryRef} required id="summary" name="summary" placeholder="Resumo do artigo" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 min-h-40"/>

                    <button type="button" className="group px-6 py-2 h-10 font-medium rounded-xl flex items-center justify-center gap-2 bg-principal-purple/90 hover:bg-principal-purple/80 transition-all text-white mt-2" onClick={verifyProceed}>
                        prosseguir
                        <ArrowRight color={green[500]} size={18} strokeWidth={2.8}  className="group-hover:translate-x-2 transition-all"/>
                    </button>

                </div>

                <div data-translate={proceed} ref={parent} aria-label="segundo passo para criar um novo artigo" className="hidden flex-1 flex-col gap-4 p-4 min-w-full min-h-full transition-all data-[translate=true]:opacity-1 data-[translate=true]:flex">

                    <h3 className="font-semibold text-zinc-700 text-xl text-center">Adicionar Conteúdo</h3>
                    
                    {
                        contents.map((content, key) => (
                            <div className="flex items-center w-full gap-2">
                                <TextArea
                                    key={key}
                                    value={content.value}
                                    onChange={e => setContents(content => {
                                        let contentChange = [...content];
                                        contentChange[key].value = e.target.value;
    
                                        return contentChange;
                                    })}
                                    className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 w-full max-w-none"
                                />

                                <button
                                    className="bg-red-300 hover:bg-red-200 text-red-600 transition-all w-8 h-8 flex justify-center items-center rounded-xl"
                                    onClick={() => {
                                        setContents(contents => {
                                            let newContents = [...contents];
                                            newContents.splice(key, 1);
                                            return newContents;
                                        })
                                    }}
                                >
                                    <Trash2 size={18} strokeWidth={2.3}/>
                                </button>
                            </div>
                        ))
                    }

                    <button
                        type="button"
                        className="px-4 py-2 bg-zinc-300 hover:bg-zinc-400 transition-all max-w-fit rounded-xl mx-auto"
                        onClick={() => {
                            setContents(contents => {
                                let newContents: ContentsProps[] = [...contents, {
                                    type: "p",
                                    value: ""
                                }];

                                return newContents;
                            });
                        }}
                    >
                        <Plus />
                    </button>

                    <div className="flex w-full items-center justify-end gap-4 mt-auto">
                        <button type="button" className="group px-6 py-2 h-10 font-medium rounded-xl flex items-center justify-center gap-2 bg-red-300 hover:bg-red-200 transition-all text-red-600 mt-2 w-1/4" onClick={() => setProceed(prev => !prev)}>
                            <ArrowLeft color={red[600]} size={18} strokeWidth={2.8} className="group-hover:-translate-x-2 transition-all"/>
                            Voltar
                        </button>
                        <SubmitForm className="mt-2 px-12 w-1/2">
                            Publicar
                        </SubmitForm>
                    </div>

                </div>

            </form>
        </Modal>
    );
}
 
export default CreateArticle;