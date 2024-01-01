import Accordion from "../Components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'dkf4',
            label: 'Can i use React?',
            content: 'Yadkfjakldfjkajdfakljfaklfjkasjdfklasjfdkasjdfaksfdj'
    },
        {
            id: 'dkf4s',
            label: 'Can i use React?',
            content: 'Yadkfjakldfjkajdfakljfaklfjkasjdfklasjfdkasjdfaksfdj'
    },
        {
            id: 'dkf64',
            label: 'Can i use React?',
            content: 'Yadkfjakldfjkajdfakljfaklfjkasjdfklasjfdkasjdfaksfdj'
    }
]

    return (
        <Accordion items={items} />
    )
}

export default AccordionPage;