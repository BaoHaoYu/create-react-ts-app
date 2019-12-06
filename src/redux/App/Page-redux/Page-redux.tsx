import * as React from 'react'
import { connect } from 'react-redux'
import { add, del, IState } from './Page-redux.redux'

const PageRedux: React.FunctionComponent<{ selfs: IState; dispath: any }> = ({
  selfs,
  dispath,
}) => {
  return (
    <div>
      <button onClick={() => dispath(add('demo1'))}>add</button>
      <button onClick={() => dispath(del('demo1'))}>del</button>
      <span>count = {selfs.count}</span>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    selfs: state.demoRedcuer__Demo,
  }
}

const mapDispatchToProps = (dispath: any) => ({ dispath })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageRedux)
