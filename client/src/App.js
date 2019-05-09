import React ,{ Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List';
import AddList from './AddList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:[],
        isAdd:false
    }
  }
  getAllData(){
    axios.get('http://localhost:4000/')
      .then((res) =>{
        this.setState({
          data : res.data
      })
    })
  }
  componentDidMount(){
    this.getAllData();
  }

  handleRemoveItem (id){
    axios.delete(`http://localhost:4000/delete${id}`)
      .then((res) => {
        alert(res.data);
          //前台重新渲染页面
          window.location.reload(true);
        
    });
  }
  changeEdit(){
    let isEdit = true;
    return isEdit;
  }
   handleUpdate(id,name,sex){
    axios.put(`http://localhost:4000/update?id=${id}&name=${name}&sex=${sex}`)
      .then((res) => {
        alert(res.data);
        //前台重新渲染页面
        window.location.reload(true);
      })
  }
  changeAdd(){
    this.setState({
      isAdd : true
    })
    this.getAllData();
  }

  handleAdd(id,name,sex){
    axios.post(`http://localhost:4000/add?id=${id}&name=${name}&sex=${sex}`)
      .then((res) => {
        alert(res.data);
        //前台重新渲染页面
        window.location.reload(true);
      })
  }

  render() {
    let {isAdd} = this.state;
    if(!!isAdd){
      return(
        <div>
          <table>
            <tr>
              <td>编号</td>
              <td>姓名</td>
              <td>性别</td>
              <td colSpan="2">操作</td>
            </tr>
            <AddList handleAdd = {this.handleAdd} isAdd = {isAdd}></AddList>
          </table>
        </div>
      )
    }else{
      return (
        <div>
          <table>
            <tr>
              <td>编号</td>
              <td>姓名</td>
              <td>性别</td>
              <td colSpan="2">操作</td>
            </tr>
            {
              this.state.data.map((item,index) => (
                <List key={index} data = {item} 
                      handleRemoveItem = {this.handleRemoveItem} 
                      changeEdit = {this.changeEdit}
                      handleUpdate = {this.handleUpdate} 
                ></List>
              ))
            } 
          </table>
          <button onClick = {() => this.changeAdd()}>新增</button>
        </div>    
      )
    } 
  }
}

