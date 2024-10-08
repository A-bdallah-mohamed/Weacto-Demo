import React from 'react'
import { useInView } from 'react-intersection-observer';
export default function UseIntersection(boolean) {
    
    return useInView({
        triggerOnce: boolean,
        threshold: 0.1
      });
    };