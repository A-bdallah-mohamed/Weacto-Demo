import React from 'react'
import { useInView } from 'react-intersection-observer';
export default function useIntersection(trigger) {
    
    return useInView({
        triggerOnce: trigger,
        threshold: 0.1
      });
    };