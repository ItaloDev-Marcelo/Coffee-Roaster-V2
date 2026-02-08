
import type React from 'react';
export type SubInfoType = Record<string, string>

export type subProps = {
  title: string,
  text: string,
  item: string
}

export type AccProps = {
  accordionTitle: string,
  accordionItems: subProps[]
}


export type AccSubProps = {
  title: string,
  text: string
  item: string, 
}

export type AccordionItemProps = {
    handleAccordion: (number: number) => void,
    index: number,
    data: AccProps
    accordionOpen: number | null,
    children: React.ReactNode
}

export type AccordionOptionProps = {
    handleInfo: (name: string, title: string) => void;
    data: subProps,
    subInfo: string
}


export type AccType = {
  handleAccordion: (campo: number | null) => void;
  accordionOpen: number | null,
  handleInfo : (name: string, title: string) => void,
  subInfo: SubInfoType
}