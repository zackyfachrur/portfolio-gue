import { useRef } from "react";
import { useScroll, useTransform } from "../lib/motion";

export const yScrollTransform = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const ySection = useTransform(scrollYProgress, [0, 1], ["-30%", "100%"]);

    return {  ref, ySection };
}