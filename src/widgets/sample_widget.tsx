// @ts-nocheck

import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';
import { useEffect, useState } from 'react';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  // let cards = useTracker(() => plugin.card.getAll());
  let rem = useTracker(() => plugin.rem.getAll());

  return (
    <div className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive h-96">
      <h1 className="text-xl">Sample Plugin</h1>
      <div>
        Hi {name}, you {!!likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </div>
      <h3>Rem</h3>
      <div className='h-full text-wrap overflow-y-auto border'>
        {rem?.map(obj => JSON.stringify(obj))}
      </div>
    </div>
  );
};

renderWidget(SampleWidget);
