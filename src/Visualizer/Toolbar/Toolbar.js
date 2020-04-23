import React, {Component} from 'react';
import {startX,startY,endX,endY, MAX_ROW,MAX_COLUMN} from '../algorithms/GRAPH_CONSTANTS'
export default class Toolbar extends Component{
    state={
        currentAlgorithm:'',
        currentAlgorithmKey:-1,
        currentMaze:'',
        currentMazeKey:-1
    }
    componentDidMount(){
      document.getElementById('startX').value=startX;
      document.getElementById('startY').value=startY;
      document.getElementById('endX').value=endX;
      document.getElementById('endY').value=endY;

    }

    algorithmSelectorHandler(key)
    {
        this.setState({
            currentAlgorithm:this.props.algorithms[key],
            currentAlgorithmKey:key    
        })
        this.props.algorithmHandler(key);
    }
    mazeSelectorHandler(key)
    {
        this.setState({
            ...this.state,
            currentMaze:this.props.mazes[key],
            currentMazeKey:key
        })
        this.props.mazeHandler(key);
    }
    setStart=()=>{
      let startX=document.getElementById('startX');
      let startY=document.getElementById('startY');
      if(startX.value=='' || startY.value==''){
        alert('Please enter a valid x/y coordinate');
        return;
      }
      if(startX.value<0 || startY.value>=MAX_ROW){
        alert('index out of bounds. Please put a valid index');
        return;
      }
      this.props.setStart(startX.value,startY.value);
    }
    setEnd=()=>{
      let endX=document.getElementById('endX');
      let endY=document.getElementById('endY');
      if(endX.value=='' || endY.value==''){
        alert('Please enter a valid x/y coordinate');
        return;
      }
      if(endX.value<0 || endY.value>=MAX_COLUMN){
        alert('index out of bounds. Please put a valid index');
        return;
      }
      this.props.setEnd(endX.value,endY.value);
    }
    render()
    {
      let setters=[{placeholder:'start',onClick:this.setStart},{placeholder:'end',onClick:this.setEnd}]
      return (
          <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalPush" disabled={this.props.disableAll}>set start/end</button>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">

              <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" disabled={this.props.disableAll}>Algorithm: {this.props.currentAlgorithm}</button>

            <div className="dropdown-menu">
              {this.props.algorithms.map((algorithm,index)=>{
                return (
                  <a className="dropdown-item" key={algorithm+'-'+index} onClick={this.props.algorithmHandler.bind(this,index)}>{algorithm}</a>
                      
                )
              })}
              </div>




            </div>
            </div>
          <button type="button" className="btn btn-success btn-lg" disabled={this.props.disableAll}>Visualize</button>
          <button type="button" className="btn bt-lg" disabled={this.props.disableAll}>clear</button>



          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
          <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" disabled={this.props.disableAll}>
              Maze algorithms
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            { this.props.mazes.map((maze,index)=>{return  (<a className="dropdown-item" style={{color: index%2==0?'blue':'green'}} key={maze} onClick={()=>{alert(maze)}}>{maze}</a>)})  }
            </div>
          </div>
        </div>


<div className="modal fade" id="modalPush" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog modal-notify modal-info" role="document">


    <div className="modal-content text-center">
      <div className="modal-header d-flex justify-content-center">
        <p className="heading">Be always up to date</p>
      </div>

      <div className="modal-body">


        <p>Do you want to receive the push notification about the newest posts?</p>

      </div>

      <div className="modal-footer flex-center">
        <button type='button' className="btn btn-info" data-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>



<br />
<br />
<div className='flex-center'>
            <form>
        <div className="row">
          <div className="col">
            <div className="md-form mt-0">
            <input placeholder="x" type="number" id="startX" min="1" max="999" style={{width:'50px',height:'50px'}} className="form-control" />
                  <label htmlFor="startX">Start X</label>
            </div>
          </div>
          <div className="col">
            <div className="md-form mt-0">
            <input placeholder="y" type="number" id="startY" style={{width:'50px',height:'50px'}} className="form-control" />
                  <label htmlFor="startY">Start Y</label>
            </div>
          </div>
          <div className="col">
            <div className="md-form mt-0">
            <button className='btn' type='button' onClick={this.setStart} disabled={this.props.disableAll}>set</button>
            </div>
          </div>
          <div className="col">
            <div className="md-form mt-0">
            <input placeholder="x" type="number" id="endX" style={{width:'50px',height:'50px'}} className="form-control" />
                  <label htmlFor="endX">End X</label>
            </div>
          </div>
          <div className="col">
            <div className="md-form mt-0">
            <input placeholder="y" type="number" id="endY" style={{width:'50px',height:'50px'}} className="form-control" />
                  <label htmlFor="endY">End Y</label>
            </div>
          </div>
          <div className="col">
            <div className="md-form mt-0">
            <button className='btn' type="button" onClick={this.setEnd} disabled={this.props.disableAll}>set</button>
            </div>
          </div>
          </div>

      </form>
      </div>





          </div>
        );
    }
}