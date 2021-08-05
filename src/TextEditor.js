import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  ContentState,
  convertFromHTML
} from "draft-js";
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";
// import BLDData from "./BLD_DataSource.json";
import {
  IconButton,
  Grid,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
  Divider
} from "@material-ui/core";
// import { SketchPicker } from "react-color";
import "./Texteditor.css";
import { withStyles } from "@material-ui/styles";
const config = {
  headings: {
    Title: "header-one",
    Subtitle: "header-two",
    Heading: "header-three"
  },
  blockTypes: {
    ul: "unordered-list-item",
    ol: "ordered-list-item"
  },
  listIcons: {
    ul: "format_list_bulleted",
    ol: "format_list_numbered"
  }
};
const Styles = {
  selected: { color: "blue" }
};
const Texteditor = props => {
  let {
    changeHTMLState,
    toggleVars,
    insertVal,
    insertTxt,
    showVars,
    initialVal
  } = props;
  initialVal = initialVal || "";
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // EditorState.createWithContent(ContentState.createFromText(initialVal || ""))
  useEffect(() => {
    const blocksFromHTML = convertFromHTML(initialVal);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [initialVal]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [headingType, setHeadingType] = useState("none");
  const [varDictionary, setvarDictionary] = useState([]);
  // let editor = null;
  const styleMap = {
    STRIKETHROUGH: {
      textDecoration: "line-through",
      color: "red"
    }
  };
  const SmallTab = withStyles({
    root: {
      minWidth: "0!important"
    }
  })(Tab);
  useEffect(() => {
    if (insertTxt) {
      sendTextToEditor(insertTxt, insertVal);
    }
  }, [insertTxt, insertVal]);
  const GridSpaceBottom = withStyles({
    root: { marginBottom: "10px" }
  })(Grid);
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }
  function updateState(editorState) {
    setEditorState(editorState);
    // focusEditor();
  }
  function _onFormat(type) {
    updateState(RichUtils.toggleInlineStyle(editorState, type));
  }
  function _onBlockType(type) {
    setHeadingType(type);
    updateState(RichUtils.toggleBlockType(editorState, type));
  }
  function _onAddLink() {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: "http:/google.com" }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    // const contentStateWithLink = Modifier.applyEntity(
    //   contentStateWithEntity,
    //   selectionState,
    //   entityKey
    // );
    // console.log("old state", editorState);
    // const newEditorState = EditorState.push(editorState, contentStateWithLink);
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });
    updateState(
      RichUtils.toggleLink(newEditorState, selectionState, entityKey)
    );
  }
  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (config.headings[type]) return config.headings[type];
    return "";
  }
  function tabChange(e, val) {
    setSelectedTab(val);
  }
  // function setEditor(edtr) {
  //   editor = edtr;
  // }
  // function focusEditor() {
  //   console.log(editor);
  //   if (editor) {
  //     editor.focus();
  //   }
  // }
  function sendTextToEditor(text, val) {
    updateState(insertText(`{{${text}}}`, editorState));
    // this.focusEditor();
    const tempObj = {};
    tempObj[`{{${text}}}`] = val;
    let tempArr = varDictionary;
    tempArr.push(tempObj);
    setvarDictionary(tempArr);
  }
  function changeStatetoHTML(state) {
    return stateToHTML(state);
  }
  function generateRenderedHTML(html) {
    for (let i = 0; varDictionary[i]; i++) {
      for (let key in varDictionary[i])
        html = html.replace(key, varDictionary[i][key]);
    }
    return html;
  }
  function sendDataBack() {
    const renderedHTML = generateRenderedHTML(
      changeStatetoHTML(editorState.getCurrentContent())
    );
    changeHTMLState(
      changeStatetoHTML(editorState.getCurrentContent()),
      renderedHTML
    );
  }
  function insertText(text, editorState) {
    const currentContent = editorState.getCurrentContent(),
      currentSelection = editorState.getSelection();

    const newContent = Modifier.replaceText(
      currentContent,
      currentSelection,
      text
    );

    const newEditorState = EditorState.push(
      editorState,
      newContent,
      "insert-characters"
    );
    return EditorState.forceSelection(
      newEditorState,
      newContent.getSelectionAfter()
    );
  }
  return (
    <Grid
      item
      container
      direction='column'
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      <GridSpaceBottom item>
        <Tabs
          value={selectedTab}
          onChange={tabChange}
          indicatorPrimaryColor='primary'
          textColor='primary'
          variant='fullWidth'
        >
          <SmallTab label='Style' />
          <SmallTab label='Format' />
          <SmallTab label='Data' />
        </Tabs>
      </GridSpaceBottom>
      <GridSpaceBottom item container alignItems='center'>
        {selectedTab === 0 && (
          <React.Fragment>
            <Grid item>
              <IconButton onClick={() => _onFormat("BOLD")}>
                <span className='material-icons'>format_bold</span>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => _onFormat("ITALIC")}>
                <span className='material-icons'>format_italic</span>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => _onFormat("STRIKETHROUGH")}>
                <span className='material-icons'>format_strikethrough</span>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => _onFormat("UNDERLINE")}>
                <span className='material-icons'>format_underlined</span>
              </IconButton>
            </Grid>
          </React.Fragment>
        )}
        {selectedTab === 1 && (
          <React.Fragment>
            <Grid item>
              <ButtonGroup
                size='small'
                aria-label='small outlined button group'
              >
                {Object.entries(config.headings).map(([key, val]) => (
                  <Button
                    key={`${key}-${val}`}
                    onClick={() => _onBlockType(val)}
                  >
                    {key}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>
            {Object.entries(config.blockTypes).map(([key, val]) => (
              <Grid item key={`${key}-${val}`}>
                <IconButton
                  key={`${key}-${val}`}
                  onClick={() => _onBlockType(val)}
                >
                  <span className='material-icons'>
                    {config.listIcons[key]}
                  </span>
                </IconButton>
              </Grid>
            ))}
          </React.Fragment>
        )}
        {selectedTab === 2 && (
          <React.Fragment>
            <Grid item>
              <IconButton onClick={_onAddLink}>
                <span className='material-icons'>link</span>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={toggleVars}
                style={showVars ? Styles.selected : {}}
              >
                <span className='material-icons'>code</span>
              </IconButton>
            </Grid>
          </React.Fragment>
        )}
      </GridSpaceBottom>
      <GridSpaceBottom
        item
        style={{
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={myBlockStyleFn}
          // ref={setEditor}
        />
      </GridSpaceBottom>
      <GridSpaceBottom item>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            sendDataBack();
          }}
        >
          Apply
        </Button>
      </GridSpaceBottom>
    </Grid>
  );
};

export default Texteditor;
