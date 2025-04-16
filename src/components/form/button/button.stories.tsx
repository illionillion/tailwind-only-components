import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Form/Button',
    tags: ['autodocs'],
}

export default meta
type Story = StoryFn<typeof Button>

export const Default: Story = () => (
    <Button>
        button
    </Button>
)

export const Outline: Story = () => (
    <Button variant="outline">
        button
    </Button>
)

export const Disabled: Story = () => (
    <Button variant="outline" disabled>
        button
    </Button>
)