import Text from '@nexys/components/Typography/Text'
import ErrorView from '@nexys/fields/ErrorView/ErrorView'
import React, { useMemo } from 'react'

export interface UseTitleAndErrorProps {
  name?: any
  title?: string
}

function useTitleAndError(options: UseTitleAndErrorProps) {
  const { title, name } = options
  const nodeTitle = useMemo(() => {
    return (
      <Text
        style={{ lineHeight: '30px', fontWeight: 'bold', display: 'block' }}
      >
        {title}
      </Text>
    )
  }, [title])

  const nodeError = name && <ErrorView name={name} />

  return [nodeTitle, nodeError]
}

export default useTitleAndError
