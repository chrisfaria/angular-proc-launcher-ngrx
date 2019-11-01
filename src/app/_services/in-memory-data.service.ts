import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Proc } from '@app/_models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const procs = [
      { id: 11, name: 'PROCESS ONE', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ex ac massa ultrices interdum', process: 'proc1', status: 'last run 2 days ago' },
      { id: 11, name: 'PROCESS TWO', desc: 'Integer vel libero consequat, maximus quam quis, lacinia felis. Donec semper nisi et risus accumsan, ut viverra ante volutpat. Morbi volutpat eleifend egestas. Sed et velit ac risus ullamcorper rutrum id vel justo', process: 'proc2', status: 'last run today' },
      { id: 11, name: 'PROCESS THREE', desc: 'Curabitur et consequat urna. Mauris placerat erat vel nisi hendrerit bibendum. Suspendisse non augue et lacus semper vulputate vitae nec nisl. Donec sollicitudin tellus diam, at accumsan neque sagittis ut. Aliquam erat volutpat', process: 'proc3', status: 'last run 104 days ago' },
      { id: 11, name: 'PROCESS FOUR', desc: 'Vestibulum auctor semper ante nec sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing', process: 'proc4', status: 'not run yet' },
      { id: 11, name: 'PROCESS FIVE', desc: 'Praesent nisl lectus, sagittis eu efficitur id, tincidunt eu lectus. Aliquam est lorem, sodales nec tortor non', process: 'proc5', status: 'last run 6 days ago' },
      { id: 11, name: 'PROCESS SIX', desc: 'Aenean sed aliquet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis sapien eu dictum iaculis. Quisque nibh erat, euismod at tristique rhoncus, ultrices id nisl', process: 'proc6', status: 'last run 5 days ago' }
    ];

    const procreq = [ 
      { status: 'OK' }
    ];

    return {procs,procreq};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(procs: Proc[]): number {
    return procs.length > 0 ? Math.max(...procs.map(proc => proc.id)) + 1 : 11;
  }
}