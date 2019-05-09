import React, { Component } from 'react'

export default class AddList extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            sex: '',
            isAdd : this.props.isAdd
        }
    }
    changItem(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    cancelAdd(){
        this.setState({
          isAdd : false
        })
        //前台重新渲染页面
        window.location.reload(true);
    }
    addItem(id,name,sex){
        this.props.handleAdd(id,name,sex);
        this.cancelAdd();
    }

  render() {
    let {id,name,sex,isAdd} = this.state;
    if(!!isAdd){
      return (
            <>
                <tr>
                    <td><input type="text" name="id" value = {id} onChange = {(e) => this.changItem(e)}></input></td>
                    <td><input type="text" name="name" value = {name} onChange = {(e) => this.changItem(e)}></input></td>
                    <td><input type="text" name="sex" value = {sex} onChange = {(e) => this.changItem(e)}></input></td>
                    <td><button onClick = {() => this.addItem(id,name,sex)}>确认</button></td>
                    <td><button onClick = {() => this.cancelAdd()}>取消</button></td>
                </tr> 
            </>
        )  
    }
    
  }
}
