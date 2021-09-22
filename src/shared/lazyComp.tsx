import * as React from 'react'
interface LazyCompState {
  Comp?: React.ComponentType
  crashed: boolean
}

export function lazyComp(loader: () => Promise<React.ComponentType<any>>): React.ReactNode {
  return class extends React.Component<any, LazyCompState> {
    state = {
      Comp: undefined,
      crashed: false,
    }
    mounted = false
    constructor(props: any) {
      super(props)
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const t = this
      loader().then(Comp => {
        if (!t.mounted) {
          return
        }
        if (!this.mounted) {
          return
        }
        t.setState({ Comp: (Comp as never) as React.ComponentType })
      })
    }
    componentDidMount() {
      this.mounted = true
    }
    componentWillUnmount() {
      this.mounted = false
    }
    componentDidCatch(error: Error, stack: React.ErrorInfo) {
      console.log('CATCH', error)
      console.log(stack)
      if (!this.mounted) {
        return
      }
      this.setState({
        crashed: true,
      })
    }

    render() {
      const { Comp, crashed } = this.state as LazyCompState
      if (Comp == null) {
        return null
      }
      if (crashed) {
        return null
      }
      return <Comp {...this.props} />
    }
  }
}
