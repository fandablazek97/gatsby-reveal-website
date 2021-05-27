import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export function useScrollSecond() {

    const reveal = useAnimation();
    const [ref, view] = useInView({threshold: 0.3, triggerOnce: true});

    if (view) {
        reveal.start("show");
    } else {
        reveal.start("hidden");
    }

    return [ref, reveal];
}
