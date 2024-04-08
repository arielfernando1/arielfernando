import { ListItem } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

export default function SkillItem({ icon, name }) {
  return (
    <Tooltip label={name} aria-label={name}>
      <ListItem style={{ margin: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
      </ListItem>
    </Tooltip>
  )
}
