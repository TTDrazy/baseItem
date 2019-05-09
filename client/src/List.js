import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            sex: this.props.data.sex,
            isEdit : false,
        }
    }
    changItem(e){
      this.setState({
          [e.target.name] : e.target.value
      })
    }
    removeItem(id){
        this.props.handleRemoveItem(id);
    }
    isUpdate(){
      this.setState({
        isEdit : this.props.changeEdit(),
      })
    }
    cancelEdit(){
      this.setState({
        isEdit : false
      })
    }
    updateItem(id,name,sex){
      this.props.handleUpdate(id,name,sex);
      this.cancelEdit();
    }

  render() {
      let {id,name,sex,isEdit} = this.state;
      if(!!isEdit){
        return(
          <tr>
            <td><input type="text" name="id" value = {id} onChange = {(e) => this.changItem(e)}></input></td>
            <td><input type="text" name="name" value = {name} onChange = {(e) => this.changItem(e)}></input></td>
            <td><input type="text" name="sex" value = {sex} onChange = {(e) => this.changItem(e)}></input></td>
            <td><button onClick = {() => this.updateItem(id,name,sex)}>确认</button></td>
            <td><button onClick = {() => this.cancelEdit()}>取消</button></td>
          </tr> 
        )
      }else{
        return (  
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{sex}</td>
            <td><button onClick = {() => this.isUpdate()}>修改</button></td>
            <td><button onClick = {() => this.removeItem(id)}>删除</button></td>
          </tr>
        )
      }
    
  }
}
