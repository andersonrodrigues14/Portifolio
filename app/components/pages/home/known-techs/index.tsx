import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./known-tech";
import { KnownTech as IKnowTech} from "@/app/types/projects";

type KnownTechsProps = {
    techs: IKnowTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos"/>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech) =>(
                    <KnowTech key={tech.name} tech={tech} 
                    />
                ))}
            </div>
        </section>
    );
}