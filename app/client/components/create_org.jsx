import React, { Component, PropTypes } from 'react'
import { Form } from 'formsy-react'
import RaisedButton from 'material-ui/lib/raised-button'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import FormsyRadioGroup from 'formsy-material-ui/lib/FormsyRadioGroup'
import FormsyRadio from 'formsy-material-ui/lib/FormsyRadio'
import MenuItem from 'material-ui/lib/menus/menu-item';

import actions from '../actions/orgs';

export default class CreateOrgForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (model, resetForm) {
    console.log(model);
    const {e, r} = actions.create(model)
    if (e) {
      alert(e);
    } else {
      FlowRouter.go(`/org/${r}`)
    }
    resetForm()
  }

  getDefaultDomain () {
    const email = Meteor.user().email();
    const domain = email.replace(/.*@/, "");
    if (['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com'].indexOf(domain) === -1){
      return domain;
    }
  }

  render () {
    return (
      <Form onValidSubmit={this.submit}>

        <FormsyText
         ref={this.label}
         name="label"
         required
         formNoValidate
         floatingLabelText="Organisation name"
         validations="isAlpha,minLength:1,maxLength:1000"
        />
        <div className="formsy-divider" />

        <FormsyText
         ref={this.domain}
         name="domain"
         formNoValidate
         floatingLabelText="Domain (optional)"
         validations="isAlpha,minLength:1,maxLength:1000"
         hintText="example.com"
         value={this.getDefaultDomain()}
         validations={{
           matchRegexp: /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
         }}
         validationError="Use the format example.com"
        />
        <div className="formsy-divider" />

        <small>Anyone with this email can sign up</small>
        <div className="formsy-divider" />

        <FormsyRadioGroup name="visibility" defaultSelected="link">
          <FormsyRadio
            value="public"
            label="Public"
          />
          <FormsyRadio
            value="link"
            label="Anyone with this link"
          />
        </FormsyRadioGroup>

        <div className="formsy-divider" />

        <RaisedButton
         type="submit"
         primary={true}
         label="SEND"
        />


      </Form>
    )
  }
}
