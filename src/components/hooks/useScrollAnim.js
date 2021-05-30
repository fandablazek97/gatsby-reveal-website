import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export function useScrollAnim() {

    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3, triggerOnce: true});

    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }

    return [element, controls];
}
