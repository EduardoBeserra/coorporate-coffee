import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from '../common/template/grid'
import IconButton from '../common/template/iconButton'
import { add, changeName, changeEmail, search, clear } from './pessoaActions' /*Fazer esse arquivo*/

