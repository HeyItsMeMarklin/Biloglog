(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[4],{509:function(e,t,n){"use strict";var c=n(186),a=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(c.sanitize)(e,{ALLOWED_TAGS:a,ALLOWED_ATTR:o})}}},512:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return R}));var c=n(12),a=n.n(c),o=n(13),i=n.n(o),r=n(14),s=n.n(r),l=n(15),m=n.n(l),u=n(7),d=n.n(u),f=n(0),b=n(6),p=n.n(b),_=n(190),h=n.n(_),v=n(16),y=n.n(v),O=n(1),g=n.n(O),j=n(47),N=n(4),E=(n(540),n(3));function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return m()(this,n)}}var k=function(e){s()(n,e);var t=w(n);function n(){return a()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.hasAction,c=e.hasDate,a=e.hasSubtitle,o=e.lines,i=p()("woocommerce-activity-card is-loading",t);return Object(f.createElement)("div",{className:i,"aria-hidden":!0},Object(f.createElement)("span",{className:"woocommerce-activity-card__icon"},Object(f.createElement)("span",{className:"is-placeholder"})),Object(f.createElement)("div",{className:"woocommerce-activity-card__header"},Object(f.createElement)("div",{className:"woocommerce-activity-card__title is-placeholder"}),a&&Object(f.createElement)("div",{className:"woocommerce-activity-card__subtitle is-placeholder"}),c&&Object(f.createElement)("div",{className:"woocommerce-activity-card__date"},Object(f.createElement)("span",{className:"is-placeholder"}))),Object(f.createElement)("div",{className:"woocommerce-activity-card__body"},Object(E.range)(o).map((function(e){return Object(f.createElement)("span",{className:"is-placeholder",key:e})}))),n&&Object(f.createElement)("div",{className:"woocommerce-activity-card__actions"},Object(f.createElement)("span",{className:"is-placeholder"})))}}]),n}(f.Component);k.propTypes={className:g.a.string,hasAction:g.a.bool,hasDate:g.a.bool,hasSubtitle:g.a.bool,lines:g.a.number},k.defaultProps={hasAction:!1,hasDate:!1,hasSubtitle:!1,lines:1};var R=k;function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return m()(this,n)}}var C=function(e){s()(n,e);var t=D(n);function n(){return a()(this,n),t.apply(this,arguments)}return i()(n,[{key:"getCard",value:function(){var e=this.props,t=e.actions,n=e.className,c=e.children,a=e.date,o=e.icon,i=e.subtitle,r=e.title,s=e.unread,l=p()("woocommerce-activity-card",n),m=Array.isArray(t)?t:[t],u=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(a)?y.a.utc(a).fromNow():a;return Object(f.createElement)("section",{className:l},s&&Object(f.createElement)("span",{className:"woocommerce-activity-card__unread"}),o&&Object(f.createElement)("span",{className:"woocommerce-activity-card__icon","aria-hidden":!0},o),r&&Object(f.createElement)("header",{className:"woocommerce-activity-card__header"},Object(f.createElement)(j.H,{className:"woocommerce-activity-card__title"},r),i&&Object(f.createElement)("div",{className:"woocommerce-activity-card__subtitle"},i),u&&Object(f.createElement)("span",{className:"woocommerce-activity-card__date"},u)),c&&Object(f.createElement)(j.Section,{className:"woocommerce-activity-card__body"},c),t&&Object(f.createElement)("footer",{className:"woocommerce-activity-card__actions"},m.map((function(e,t){return Object(f.cloneElement)(e,{key:t})}))))}},{key:"render",value:function(){var e=this.props.onClick;return e?Object(f.createElement)(N.Button,{className:"woocommerce-activity-card__button",onClick:e},this.getCard()):this.getCard()}}]),n}(f.Component);C.propTypes={actions:g.a.oneOfType([g.a.arrayOf(g.a.element),g.a.element]),onClick:g.a.func,className:g.a.string,children:g.a.node,date:g.a.string,icon:g.a.node,subtitle:g.a.node,title:g.a.oneOfType([g.a.string,g.a.node]),unread:g.a.bool},C.defaultProps={icon:Object(f.createElement)(h.a,{size:48}),unread:!1}},540:function(e,t,n){},544:function(e,t,n){},587:function(e,t,n){"use strict";n.r(t);var c=n(18),a=n.n(c),o=n(34),i=n.n(o),r=n(0),s=n(2),l=n(20),m=n(47),u=n(22),d=n(11),f=n(294),b=n(293),p=n(512),_=n(12),h=n.n(_),v=n(13),y=n.n(v),O=n(14),g=n.n(O),j=n(15),N=n.n(j),E=n(7),w=n.n(E),k=n(1),R=n.n(k);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=w()(e);if(t){var a=w()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return N()(this,n)}}var C=function(e){g()(n,e);var t=D(n);function n(){return h()(this,n),t.apply(this,arguments)}return y()(n,[{key:"render",value:function(){var e=this.props.className;return Object(r.createElement)("div",{className:"woocommerce-inbox-message is-placeholder ".concat(e),"aria-hidden":!0},Object(r.createElement)("div",{className:"woocommerce-inbox-message__wrapper"},Object(r.createElement)("div",{className:"woocommerce-inbox-message__content"},Object(r.createElement)("div",{className:"woocommerce-inbox-message__date"},Object(r.createElement)("div",{className:"sixth-line"})),Object(r.createElement)("div",{className:"woocommerce-inbox-message__title"},Object(r.createElement)("div",{className:"line"}),Object(r.createElement)("div",{className:"line"})),Object(r.createElement)("div",{className:"woocommerce-inbox-message__text"},Object(r.createElement)("div",{className:"line"}),Object(r.createElement)("div",{className:"third-line"}))),Object(r.createElement)("div",{className:"woocommerce-inbox-message__actions"},Object(r.createElement)("div",{className:"fifth-line"}),Object(r.createElement)("div",{className:"fifth-line"}))))}}]),n}(r.Component);C.propTypes={className:R.a.string};var x=C,A=n(9),T=n.n(A),S=n(5),B=n.n(S),M=n(4),U=n(528),P=n.n(U),L=n(16),q=n.n(L),I=n(6),F=n.n(I),Y=n(27),V=n(25);function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=w()(e);if(t){var a=w()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return N()(this,n)}}var z=function(e){g()(n,e);var t=W(n);function n(e){var c;return h()(this,n),(c=t.call(this,e)).state={inAction:!1},c.handleActionClick=c.handleActionClick.bind(T()(c)),c}return y()(n,[{key:"handleActionClick",value:function(e){var t=this.props,n=t.action,c=t.actionCallback,a=t.batchUpdateNotes,o=t.createNotice,i=t.noteId,r=t.triggerNoteAction,l=t.removeAllNotes,m=t.removeNote,u=t.onClick,d=t.updateNote,f=e.target.href||"",b=!0;f.length&&!f.startsWith(V.a)&&(e.preventDefault(),b=!1,window.open(f,"_blank")),n?this.setState({inAction:b},(function(){r(i,n.id),u&&u()})):(i?m(i).then((function(){o("success",Object(s.__)("Message dismissed",'woocommerce'),{actions:[{label:Object(s.__)("Undo",'woocommerce'),onClick:function(){d(i,{is_deleted:0})}}]})})).catch((function(){o("error",Object(s.__)("Message could not be dismissed",'woocommerce'))})):l().then((function(e){o("success",Object(s.__)("All messages dismissed",'woocommerce'),{actions:[{label:Object(s.__)("Undo",'woocommerce'),onClick:function(){a(e.map((function(e){return e.id})),{is_deleted:0})}}]})})).catch((function(){o("error",Object(s.__)("Message could not be dismissed",'woocommerce'))})),c(!0))}},{key:"render",value:function(){var e=this.props,t=e.action,n=e.dismiss,c=e.label;return Object(r.createElement)(M.Button,{isSecondary:!0,isBusy:this.state.inAction,disabled:this.state.inAction,href:t&&t.url&&t.url.length?t.url:void 0,onClick:this.handleActionClick},n?c:t.label)}}]),n}(r.Component);z.propTypes={noteId:R.a.number,label:R.a.string,dismiss:R.a.bool,actionCallback:R.a.func,action:R.a.shape({id:R.a.number.isRequired,url:R.a.string,label:R.a.string.isRequired,primary:R.a.bool.isRequired}),onClick:R.a.func};var H=Object(l.compose)(Object(d.withDispatch)((function(e){var t=e("core/notices").createNotice,n=e(u.NOTES_STORE_NAME),c=n.batchUpdateNotes,a=n.removeAllNotes,o=n.removeNote,i=n.updateNote;return{batchUpdateNotes:c,createNotice:t,removeAllNotes:a,removeNote:o,triggerNoteAction:n.triggerNoteAction,updateNote:i}})))(z),J=n(509);n(544);function Q(){var e,t="",n=(e=window.location.search)?e.substr(1).split("&").reduce((function(e,t){var n=t.split("="),c=n[0],a=decodeURIComponent(n[1]);return a=isNaN(Number(a))?a:Number(a),e[c]=a,e}),{}):{},c=n.page,a=n.path,o=n.post_type;if(c){var i="wc-admin"===c?"home_screen":c;t=a?a.replace(/\//g,"_").substring(1):i}else o&&(t=o);return t}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=w()(e);if(t){var a=w()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return N()(this,n)}}var Z=function(e){g()(n,e);var t=G(n);function n(e){var c;return h()(this,n),c=t.call(this,e),B()(T()(c),"onActionClicked",(function(e){e.actioned_text&&c.setState({clickedActionText:e.actioned_text})})),c.onVisible=c.onVisible.bind(T()(c)),c.hasBeenSeen=!1,c.state={isDismissModalOpen:!1,dismissType:null,clickedActionText:null},c.openDismissModal=c.openDismissModal.bind(T()(c)),c.closeDismissModal=c.closeDismissModal.bind(T()(c)),c.bodyNotificationRef=Object(r.createRef)(),c.toggleButtonRef=Object(r.createRef)(),c.screen=Q(),c}return y()(n,[{key:"componentDidMount",value:function(){var e=this;this.bodyNotificationRef.current&&this.bodyNotificationRef.current.addEventListener("click",(function(t){return e.handleBodyClick(t,e.props)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.bodyNotificationRef.current&&this.bodyNotificationRef.current.removeEventListener("click",(function(t){return e.handleBodyClick(t,e.props)}))}},{key:"handleBodyClick",value:function(e,t){var n=e.target.href;if(n){var c=t.note;Object(Y.recordEvent)("wcadmin_inbox_action_click",{note_name:c.name,note_title:c.title,note_content_inner_link:n})}}},{key:"onVisible",value:function(e){if(e&&!this.hasBeenSeen){var t=this.props.note;Object(Y.recordEvent)("inbox_note_view",{note_content:t.content,note_name:t.name,note_title:t.title,note_type:t.type,screen:this.screen}),this.hasBeenSeen=!0}}},{key:"openDismissModal",value:function(e,t){this.setState({isDismissModalOpen:!0,dismissType:e}),t()}},{key:"closeDismissModal",value:function(e){var t=this.state.dismissType,n=this.props.note,c="all"===t;Object(Y.recordEvent)("inbox_action_dismiss",{note_name:n.name,note_title:n.title,note_name_dismiss_all:c,note_name_dismiss_confirmation:e||!1,screen:this.screen}),this.setState({isDismissModalOpen:!1})}},{key:"handleBlur",value:function(e,t){var n;if(e.relatedTarget)n=e.relatedTarget;else if(this.toggleButtonRef.current){var c=this.toggleButtonRef.current.ownerDocument;n=c?c.activeElement:null}!!n&&["woocommerce-admin-dismiss-notification","components-popover__content"].some((function(e){return n.className.includes(e)}))?e.preventDefault():t()}},{key:"renderDismissButton",value:function(){var e=this;return this.state.clickedActionText?null:Object(r.createElement)(M.Dropdown,{contentClassName:"woocommerce-admin-dismiss-dropdown",position:"bottom right",renderToggle:function(t){var n=t.onClose,c=t.onToggle;return Object(r.createElement)(M.Button,{isTertiary:!0,onClick:c,ref:e.toggleButtonRef,onBlur:function(t){return e.handleBlur(t,n)}},Object(s.__)("Dismiss",'woocommerce'))},focusOnMount:!1,popoverProps:{noArrow:!0},renderContent:function(t){var n=t.onToggle;return Object(r.createElement)("ul",null,Object(r.createElement)("li",null,Object(r.createElement)(M.Button,{className:"woocommerce-admin-dismiss-notification",onClick:function(){return e.openDismissModal("this",n)}},Object(s.__)("Dismiss this message",'woocommerce'))),Object(r.createElement)("li",null,Object(r.createElement)(M.Button,{className:"woocommerce-admin-dismiss-notification",onClick:function(){return e.openDismissModal("all",n)}},Object(s.__)("Dismiss all messages",'woocommerce'))))}})}},{key:"getDismissConfirmationButton",value:function(){var e=this.props.note,t=this.state.dismissType;return Object(r.createElement)(H,{key:e.id,noteId:"all"===t?null:e.id,label:Object(s.__)("Yes, I'm sure",'woocommerce'),actionCallback:this.closeDismissModal,dismiss:!0,screen:this.screen})}},{key:"renderDismissConfirmationModal",value:function(){var e=this;return Object(r.createElement)(M.Modal,{title:Object(r.createElement)(r.Fragment,null,Object(s.__)("Are you sure?",'woocommerce')),onRequestClose:function(){return e.closeDismissModal()},className:"woocommerce-inbox-dismiss-confirmation_modal"},Object(r.createElement)("div",{className:"woocommerce-inbox-dismiss-confirmation_wrapper"},Object(r.createElement)("p",null,Object(s.__)("Dismissed messages cannot be viewed again",'woocommerce')),Object(r.createElement)("div",{className:"woocommerce-inbox-dismiss-confirmation_buttons"},Object(r.createElement)(M.Button,{isSecondary:!0,onClick:function(){return e.closeDismissModal()}},Object(s.__)("Cancel",'woocommerce')),this.getDismissConfirmationButton())))}},{key:"renderActions",value:function(e){var t=this,n=e.actions,c=e.id,a=this.state.clickedActionText;return a||(n?Object(r.createElement)(r.Fragment,null,n.map((function(e,n){return Object(r.createElement)(H,{key:n,noteId:c,action:e,onClick:function(){return t.onActionClicked(e)}})}))):void 0)}},{key:"render",value:function(){var e=this.props,t=e.lastRead,n=e.note,c=this.state.isDismissModalOpen,a=n.content,o=n.date_created,i=n.date_created_gmt,s=n.image,l=n.is_deleted,u=n.layout,d=n.status,f=n.title;if(l)return null;var b=!t||!i||new Date(i+"Z").getTime()>t,p=o,_="plain"!==u&&""!==u,h=F()("woocommerce-inbox-message",u,{"message-is-unread":b&&"unactioned"===d});return Object(r.createElement)(P.a,{onChange:this.onVisible},Object(r.createElement)("section",{className:h},_&&Object(r.createElement)("div",{className:"woocommerce-inbox-message__image"},Object(r.createElement)("img",{src:s,alt:""})),Object(r.createElement)("div",{className:"woocommerce-inbox-message__wrapper"},Object(r.createElement)("div",{className:"woocommerce-inbox-message__content"},b&&Object(r.createElement)("div",{className:"woocommerce-inbox-message__unread-indicator"}),p&&Object(r.createElement)("span",{className:"woocommerce-inbox-message__date"},q.a.utc(p).fromNow()),Object(r.createElement)(m.H,{className:"woocommerce-inbox-message__title"},f),Object(r.createElement)(m.Section,{className:"woocommerce-inbox-message__text"},Object(r.createElement)("span",{dangerouslySetInnerHTML:Object(J.a)(a),ref:this.bodyNotificationRef}))),Object(r.createElement)("div",{className:"woocommerce-inbox-message__actions"},this.renderActions(n),this.renderDismissButton())),c&&this.renderDismissConfirmationModal()))}}]),n}(r.Component);Z.propTypes={note:R.a.shape({id:R.a.number,status:R.a.string,title:R.a.string,content:R.a.string,date_created:R.a.string,date_created_gmt:R.a.string,actions:R.a.arrayOf(R.a.shape({id:R.a.number.isRequired,url:R.a.string,label:R.a.string.isRequired,primary:R.a.bool.isRequired})),layout:R.a.string,image:R.a.string,is_deleted:R.a.bool}),lastRead:R.a.number};var K=Z,X=n(197),$=function(e){var t=e.hasNotes,n=e.isBatchUpdating,c=e.lastRead,a=e.notes;if(!n){if(!t)return Object(r.createElement)(p.a,{className:"woocommerce-empty-activity-card",title:Object(s.__)("Your inbox is empty",'woocommerce'),icon:!1},Object(s.__)("As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!",'woocommerce'));var o=Object.keys(a).map((function(e){return a[e]}));return Object(r.createElement)(f.a,{role:"menu"},o.map((function(e){var t=e.id;return e.is_deleted?null:Object(r.createElement)(b.a,{key:t,timeout:500,classNames:"woocommerce-inbox-message"},Object(r.createElement)(K,{key:t,note:e,lastRead:c}))})))}},ee={page:1,per_page:u.QUERY_DEFAULTS.pageSize,status:"unactioned",type:u.QUERY_DEFAULTS.noteTypes,orderby:"date",order:"desc",_fields:["id","name","title","content","type","status","actions","date_created","date_created_gmt","layout","image","is_deleted"]};t.default=Object(l.compose)(Object(d.withSelect)((function(e){var t=e(u.NOTES_STORE_NAME),n=t.getNotes,c=t.getNotesError,a=t.isResolving,o=t.isNotesRequesting;return{notes:n(ee),isError:Boolean(c("getNotes",[ee])),isResolving:a("getNotes",[ee]),isBatchUpdating:o("batchUpdateNotes")}})))((function(e){var t=e.isError,n=e.isResolving,c=e.isBatchUpdating,o=e.notes,l=Object(u.useUserPreferences)(),d=l.updateUserPreferences,f=i()(l,["updateUserPreferences"]),b=Object(r.useState)(f.activity_panel_inbox_last_read),p=a()(b,1)[0];if(Object(r.useEffect)((function(){var e=Date.now();d({activity_panel_inbox_last_read:e})}),[]),t){var _=Object(s.__)("There was an error getting your inbox. Please try again.",'woocommerce'),h=Object(s.__)("Reload",'woocommerce');return Object(r.createElement)(m.EmptyContent,{title:_,actionLabel:h,actionURL:null,actionCallback:function(){window.location.reload()}})}var v=Object(X.b)(o);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"woocommerce-homepage-notes-wrapper"},(n||c)&&Object(r.createElement)(m.Section,null,Object(r.createElement)(x,{className:"banner message-is-unread"})),Object(r.createElement)(m.Section,null,!n&&!c&&$({hasNotes:v,isBatchUpdating:c,lastRead:p,notes:o}))))}))}}]);