import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(
    public dialog: MatDialog
  ) {}
 

  openPlayerDialog(legend: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: legend,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  legends = [
    {
      name: 'Ricardo Cadú',
      description: `
       Ricardo Cadú, a Portuguese defender who was key to the team's success during the 2000s. Cadú was captain of CFR Cluj and led the team to multiple league titles and its first Champions League appearances.
      `,
      photo_url: 'https://monitorulcj.ro/documente/stories//2020/04/27/cadu-cfr.jpg'
    },
    {
      name: 'Ciprian Deac',
      description: `
      Another important name is Romanian striker Ciprian Deac, who has been one of the club's most consistent players, with several league titles and outstanding performances in European competitions. His ability to score goals at crucial moments has made him an idol for the fans.      
      `,
      photo_url: 'https://www.fanatik.ro/wp-content/thumbnails/ToYgjYsgpkTfvPwTS_mVyB9bSV0=/920x518/smart/filters:contrast(5):format(webp):quality(80)/wp-content/uploads/2022/09/ciprian-deac-e1663623593411.jpg'
    },
    {
      name: 'Juan Culio',
      description: `
      Juan Culio, an Argentinian midfielder, is remembered for his impressive Champions League performance in the historic victory over AS Roma in 2008. These players, among others, have left an indelible mark on the history of CFR Cluj, establishing themselves as legends of the club. 
      `,      
      photo_url: 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTAxdHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTQl/MkYwMiUyRjE0JTJGMjE2NDQwXzIxNjQ0/MF9qdWFuX2VtbWFudWVsX2N1bGlvX2Nm/cl9jbHVqLmpwZyZ3PTcwMCZoPTQyMCZo/YXNoPTM1M2E2ZjUxNGNlNDhiOGRhMjBjNTcwNjFkZTdhNTVj.thumb.jpg'
    },
    {
      name: 'Mario Camora',
      description: `
      Mario Camora, another key player, has been an essential figure for the club since joining in 2011. The portuguese footballer left-back, naturalised rumanian, has become a symbol of consistency and leadership, being also captain and an integral part of the multiple league titles won over the last decade.
      `,      
      photo_url: 'https://cacheimg.gsp.ro/autocrop/smp-images-production/gsp.ro/15122022/be396e15-b472-4bea-a38b-53e9c022e4a1.jpg?width=500&height=0'
    },
    {
      name: 'Constantin Rădulescu',
      description: `
      Among the historical and perhaps most important figures of the club is Constantin Rădulescu, who not only gave his name to the club's stadium, but was also an influential player and coach in the early days of CFR Cluj, leaving a lasting legacy on the team.      
      `,      
      photo_url: 'https://cluj24.ro/wp-content/uploads/2021/10/jumate-scaled-e1635407084887.jpg'
    },
    {
      name: 'Antonio da Silva',
      description: `
      Antonio da Silva, another outstanding Brazilian player, was also a key player in CFR Cluj's midfield during the early years of the club's modern era, bringing his experience and technical quality at crucial moments.
      `,      
      photo_url: 'https://as.ro/wp-content/uploads/2024/03/Tony-Da-Silva.jpg'
    },
  ]
}
