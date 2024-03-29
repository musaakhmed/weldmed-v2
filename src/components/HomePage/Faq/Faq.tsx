'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { faqs } from '@/data/faqs';

const Faq = () => {
	return (
		<motion.div
			className="mx-auto my-16 flex h-full flex-col items-center justify-start p-8 lg:container lg:text-xl"
			initial={{ y: 25, opacity: 0 }}
			whileInView={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.75,
					ease: [0.1, 0.03, 0.5, 0.9],
					delay: 0.5,
				},
			}}
		>
			{faqs.map(({ question, answer }, i) => (
				<Accordion key={i} type="single" collapsible className="w-full">
					<AccordionItem value={i.toString()}>
						<AccordionTrigger className="text-left font-bold">
							{question}
						</AccordionTrigger>
						<AccordionContent className="md:text-lg lg:text-xl">
							{answer}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</motion.div>
	);
};

export default Faq;
