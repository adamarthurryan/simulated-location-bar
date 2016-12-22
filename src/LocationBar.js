class LocationBar extends React.Component {
  onChangePath(event) {
    this.props.router.push(event.target.value)
  }
  onPrev(event) {
    this.props.router.goBack()
  }
  onNext(event) {
    this.props.router.goForward()
  }
  
  render () {
    return <div className="ui segment basic container">
      <div className="ui segment basic">
          <button class="ui button" onClick={this.onPrev.bind(this)}>&lt;</button>        
          <button class="ui button" onClick={this.onNext.bind(this)}>&gt;</button>        
          <input type='text' value={this.props.location.pathname} onChange={this.onChangePath.bind(this)}></input>
      </div>
      <div className="ui segment attached bottom">
        {this.props.children}
      </div>
    </div>
  }
}
