"use client"

import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import SubmitForm from "@/components/ui/SubmitForm";
import CreateArticleAction from "./actions/create";
import Modal from "@/components/ui/Modal";
import { useRef } from "react";

const CreateArticle = () => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Modal
            triggerText="Adicionar Artigo"
            classNames={{
                trigger: "max-w-fit mx-auto",
            }}
            onOpenChange={() => {
                // reseta os fields do formulário toda vez que o modal é aberto ou fechado.
                formRef.current?.reset();
            }}
        >
            <h3 className="text-xl font-medium text-zinc-800 mx-4">Novo Artigo</h3>

            <form
                action={async form => {
                    // chama a server action mandando todos os valores dos inputs do formulário.
                    await CreateArticleAction(form);

                    alert("Artigo criado com sucesso!");
                }}
                ref={formRef}
                className="flex flex-col gap-2 p-4  w-full h-full"
            >
                <label htmlFor="imageUrl" className="text-sm font-medium text-zinc-700">Url da imagem</label>
                <Input id="imageUrl" name="image" placeholder="Url da imagem" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 w-full max-w-none"/>

                <label htmlFor="title" className="text-sm font-medium text-zinc-700">Título do artigo</label>
                <Input id="title" name="title" placeholder="Título do artigo" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 w-full max-w-none"/>

                <label htmlFor="summary" className="text-sm font-medium text-zinc-700 mt-2">Resumo do artigo</label>
                <TextArea id="summary" name="summary" placeholder="Resumo do artigo" className="bg-zinc-300 placeholder-zinc-600 text-zinc-900 focus:ring-0 min-h-40"/>

                <SubmitForm className="mt-2">
                    Adicionar
                </SubmitForm>
            </form>
        </Modal>
    );
}
 
export default CreateArticle;