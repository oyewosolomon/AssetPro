import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SmartShelf's IoT technology work?",
    answer: "SmartShelf uses advanced weight sensors and computer vision technology to monitor inventory levels in real-time. Our smart shelves automatically detect when products are removed or restocked, updating your inventory management system instantly."
  },
  {
    question: "What types of retail businesses can benefit from SmartShelf?",
    answer: "SmartShelf is suitable for a wide range of retail businesses, including supermarkets, convenience stores, pharmacies, and specialty retail stores. Any business that needs to manage physical inventory can benefit from our solution."
  },
  {
    question: "How long does it take to implement SmartShelf?",
    answer: "Implementation typically takes 2-4 weeks, depending on the size of your store and number of shelves. Our team handles the entire setup process, including hardware installation, software configuration, and staff training."
  },
  {
    question: "Can SmartShelf integrate with my existing POS system?",
    answer: "Yes, SmartShelf is designed to integrate seamlessly with most major POS and inventory management systems, including Shopify, Square, and SAP. Our team will ensure smooth integration with your existing infrastructure."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, regular system maintenance, and software updates. Our support team is always available to help with any questions or issues you may encounter."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about SmartShelf's IoT retail solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
