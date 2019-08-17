import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@components/Button'

const stories = storiesOf('Button', module)
stories.add('with text', () => {
  return <Button>aaa</Button>
})
