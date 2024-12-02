// @ts-nocheck

import { usePlugin, renderWidget, useTracker, RemViewer } from '@remnote/plugin-sdk';
import { Suspense, useEffect, useState } from 'react';

export const SampleWidget = () => {
  const plugin = usePlugin();
  const [log, consoleLog] = useState('');

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const rem = useTracker(() => plugin.rem.getAll());
  // const pathRem = useTracker(() => plugin.rem.findOne('fXUOIikXWuxS3rlh8'));

  useEffect(() => {
    /* Pseudo code for getting queued cards */
    // 1. remNamespace.getAll()
    // 2. Filter rem based on if parent is null
    // 3. Call allRemInFolderQueue() on all remaining rem to get all queued cards
    if (!pathRem) return;

    (async function () {
      let rem = pathRem, prevRem = null, count = 0;
      while (rem) {
        prevRem = rem;
        rem = await rem.getParentRem();
        count++;
      }

      consoleLog(`${count}, ${JSON.stringify(prevRem)}`);
    })()
  }, [plugin, pathRem])

  return (
    <div className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive flex flex-col h-full ">
      <h1 className="text-xl">Sample Plugin</h1>
      <div>
        Hi {name}, you {!!likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </div>
      <RemViewer 
        remId={pathRem?._id}
        width='100%'
      />
      <div className='flex-1'>
        <h2 className='border border-solid'>Log</h2>
        <div className='h-96 border border-solid overflow-auto'>{log}</div>
      </div>
    </div>
  );
};

renderWidget(SampleWidget);
