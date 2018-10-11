import React, { Component } from 'react';
import { Form,Input,Button } from 'element-react';
import "./form.css"
export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: {
                username:"名字",
                emails:"邮箱",
                info:"留言",
            },
            form: {
                domains: [{
                    key: 1,
                    value: '',
                    desc: ''
                }],
                email: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                  ]
            }
        };
    }
      
    handleSubmit(e) {
        e.preventDefault();
      
        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
      
    removeDomain(item, e) {
        var index = this.state.form.domains.indexOf(item);
      
        if (index !== -1) {
            this.state.form.domains.splice(index, 1);
            this.forceUpdate();
        }
      
        e.preventDefault();
    }
      
    addDomain(e) {
        e.preventDefault();
      
        this.state.form.domains.push({
            key: this.state.form.domains.length,
            value: ''
        });
      
        this.forceUpdate();
    }
      
    onEmailChange(value) {
        this.setState({
            form: Object.assign({}, this.state.form, { email: value })
        });
    }
      
    onDomainChange(index, value) {
        this.state.form.domains[index].value = value;
        this.forceUpdate();
    }
    onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
    }
    
    onFocus(key) { 
        switch (key) {
            case '1': { 
               let  label = Object.assign({}, this.state.labels, {username: "" });
                this.setState({  labels: label});
            }break;
            case '2': { 
                let  label = Object.assign({}, this.state.labels, {emails: "" });
                 this.setState({  labels: label});
            } break;
            case '3': { 
                let  label = Object.assign({}, this.state.labels, {info: "" });
                 this.setState({  labels: label});
             }break;
                
            default: return this.state.labels;      
        }
        
    }
    onBlur (event){ 
    //    var e = window.event \|| e;
        // e.preventDefault();\
        console.dir(event.target.defaultValue)
        console.dir(event.target)
        // if (event.target.defaultValue== underfind) {
        //     switch () {
        //         case '1': {
        //             let label = Object.assign({}, this.state.labels, { username: "名字" });
        //             this.setState({ labels: label });
        //         } break;
        //         case '2': {
        //             let label = Object.assign({}, this.state.labels, { emails: "邮箱" });
        //             this.setState({ labels: label });
        //         } break;
        //         case '3': {
        //             let label = Object.assign({}, this.state.labels, { info: "留言" });
        //             this.setState({ labels: label });
        //         } break;
                
        //         default: return this.state.labels;
        //     }
        // } else { 
        //     console.log("me")
        // }
       
        
    }

    render() {
        return (
            <Form ref="form" model={this.state.form} rules={this.state.rules}  className="demo-dynamic">
                <Form.Item label={this.state.labels.username}>
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} onFocus={this.onFocus.bind(this, "1")} onBlur={this.onBlur.bind(this)}></Input>
                </Form.Item>
                <Form.Item prop="email" label={this.state.labels.emails}>
                    <Input value={this.state.form.email} onChange={this.onEmailChange.bind(this)} onFocus={this.onFocus.bind(this,"2")}  onBlur={this.onBlur.bind(this)}></Input>
                </Form.Item>
               
                <Form.Item label={this.state.labels.info} prop="desc">
                    <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')} onFocus={this.onFocus.bind(this,"3")}  onBlur={this.onBlur.bind(this)}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                </Form.Item>
            </Form>
        )
    }
}
