// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

caculate.onclick = function(element){
  let daily_work_time = document.getElementById('workhour');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript( tabs[0].id, 
      { code: 'var h = '+daily_work_time.value+';'},
      function(){chrome.tabs.executeScript( tabs[0].id,{file: 'content.js'});}
    );
  });
};


