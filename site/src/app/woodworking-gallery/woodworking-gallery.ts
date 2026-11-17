import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { woodworking, WoodworkingPiece } from '../data/woodworking';

@Component({
  selector: 'app-woodworking-gallery',
  template: `
    @if (pieces.length > 0) {
      <section class="section alt" id="woodworking">
        <div class="wrap">
          <p class="eyebrow">Outside the code</p>
          <h2>Woodworking</h2>
          <p class="sub">Things I make with my hands, and what I learned making them.</p>

          <ul class="gallery">
            @for (piece of pieces; track piece.image) {
              <li>
                <button type="button" class="thumb" (click)="open(piece)" [attr.aria-label]="'View ' + piece.title">
                  <img
                    [src]="piece.image"
                    [alt]="piece.alt"
                    [attr.width]="piece.width"
                    [attr.height]="piece.height"
                    loading="lazy"
                  />
                </button>
                <h3>{{ piece.title }}</h3>
                <p>{{ piece.description }}</p>
              </li>
            }
          </ul>
        </div>
      </section>

      <dialog #lightbox class="lightbox" (click)="onBackdrop($event)" (close)="selected.set(null)">
        @if (selected(); as piece) {
          <figure>
            <img [src]="piece.image" [alt]="piece.alt" />
            <figcaption>
              <h3>{{ piece.title }}</h3>
              <p>{{ piece.description }}</p>
            </figcaption>
          </figure>
        }
        <button type="button" class="close" (click)="close()" aria-label="Close">×</button>
      </dialog>
    }
  `,
})
export class WoodworkingGallery {
  protected readonly pieces = woodworking;
  protected readonly selected = signal<WoodworkingPiece | null>(null);
  private readonly lightbox = viewChild<ElementRef<HTMLDialogElement>>('lightbox');

  protected open(piece: WoodworkingPiece): void {
    this.selected.set(piece);
    this.lightbox()?.nativeElement.showModal();
  }

  protected close(): void {
    this.lightbox()?.nativeElement.close();
  }

  protected onBackdrop(event: MouseEvent): void {
    // Clicks on the dialog element itself (outside the content) hit the backdrop.
    if (event.target === this.lightbox()?.nativeElement) {
      this.close();
    }
  }
}
