import { ButtonTest } from ".";
import  ButtonTestDoc  from "./buttonTestDoc.mdx";
import { withActions } from '@storybook/addon-actions/decorator';

export default {
    title: 'Components-DS/Atoms/button-test',

    parameters: {
        docs: {
            page: null ,
            description: {
                component: ButtonTestDoc
            }
        },
        actions: {
            handles: ['mouseover']
        }
    },
    decorators: [withActions],

    argTypes: {
        bgColor: {
            name: 'bgColor',
            options: ['bg-slate-800', 'bg-orange-500', 'bg-green-400' ],
            control: {
                type: 'radio',
            }
        },
        txColor: {
            name: 'txColor',
            options: ['text-slate-800', 'text-orange-500', 'text-green-400' ],
            control: {
                type: 'radio',
            }
        },
        sizeW: {
            name: 'sizeW',
            options: {small:'w-32', medium:'w-40', large: 'w-52'} ,
            control: {
                type: 'radio',
            }
        },
        functionTest: {
            description: 'Event',
            action: 'clicked'
        }
    }
}


const Template = ({label, ...args}) => {
    return ButtonTest({
        label,
        ...args
    })
}

export const Default = Template.bind({})
Default.args = {
    label: 'boton prueba',
    bgColor: 'bg-indigo-600',
    txColor: 'text-cyan-50',
    sizeW: 'w-32'
    
}
export const Active = Template.bind({})
Active.args = {
    label: 'boton activo',
    bgColor: 'bg-indigo-600',
    rounded: 'rounded-lg',
    txColor: 'text-cyan-50',
    sizeW: 'w-40'
    
}