import Vue from 'vue'
// @ts-ignore
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import awsmobile from '../aws-exports'
Amplify.configure(awsmobile)

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.component(components)
