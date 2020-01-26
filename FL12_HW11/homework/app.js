const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');





  
  function renderElement(el) {
      if (el.folder) {
          const childrenRenderer = Array.isArray(el.children) ? el.children.map(renderElement) : 'Folder is empty'
          return `<div class="folder" onClick="onClickHandler(event)">${childrenRenderer}</div>`
      } else {
          return `<div class="item" onClick="event.stopPropagation();">${el.title}</div>`;
      }
  }

  function onClickHandler(event) {
        if (event.target.className.contains('open')){
            event.target.removeClass('open');
        } else {
            event.target.add('open');
        }
    }
  
  const html = structure.map(renderElement);
  

  let div = document.createElement('div')
  let folderClosed = '<i class="material-icons folder_closed">folder</i>'
  let file = '<i class="material-icons file">insert_drive_file</i>'
  div.innerHTML = html

  rootNode.append(div)