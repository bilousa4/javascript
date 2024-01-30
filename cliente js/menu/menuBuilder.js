
import $ from 'jquery';
import { MenuConfig } from './menu-config.js';

class MenuBuilder {
    constructor() {
        this.menuItems = [];
        this.styles = MenuConfig; // Using MenuConfig as default styles
    }

    addItem(item) {
        this.menuItems.push(item);
    }

    buildMenu() {
        const $body = $('body');
        $body.css(this.styles.bodyStyles);

        const $ul = $('<ul>').addClass('nav');
        const navStyles = Object.assign({}, this.styles.navStyles, {
            width: MenuConfig.navStyles.width,
            background: MenuConfig.navStyles.background,
        });
        $ul.css(navStyles);

        if (MenuConfig.mode === 'horizontal') {
            $ul.addClass('horizontal-menu');
        }

        this.menuItems.forEach(item => {
            const $li = $('<li>').addClass('nav-item');
            const navItemStyles = Object.assign({}, this.styles.navItemStyles, {
                fontSize: MenuConfig.navItemStyles.fontSize,
                background: MenuConfig.navItemStyles.background,
            });
            $li.css(navItemStyles);

            const $categoryLink = $('<a>')
                .attr('href', item.link || '#')
                .addClass('nav-link')
                .text(item.name)
                .css(this.styles.navLinkStyles);

            if (item.clickHandler && typeof item.clickHandler === 'function') {
                $categoryLink.on('click', function (event) {
                    event.preventDefault();
                    item.clickHandler();
                });
            }

            const $submenu = $('<div>').attr('id', item.name.toLowerCase().replace(' ', '_')).addClass('nav-submenu');
            const navSubmenuStyles = Object.assign({}, this.styles.navSubmenuStyles, {
                background: MenuConfig.navSubmenuStyles.background,
            });
            $submenu.css(navSubmenuStyles);

            item.subcategoryItems.forEach(subcategory => {
                const $subcategoryLink = $('<a>')
                    .attr('href', subcategory.link)
                    .addClass('nav-submenu-link')
                    .text(subcategory.name)
                    .css(this.styles.navSubmenuLinkStyles);

                $subcategoryLink.hover(
                    function () {
                        $(this).css({
                            background: MenuConfig.navSubmenuLinkHoverStyles.background,
                        });
                    },
                    function () {
                        $(this).css({
                            background: MenuConfig.navSubmenuLinkStyles.background,
                        });
                    }
                );

                $submenu.append($subcategoryLink);
            });

            $li.append($categoryLink, $submenu);
            $ul.append($li);
        });

        // Apply general layout styles
        $ul.css({
            borderRadius: this.styles.borderRadius,
            margin: this.styles.margin,
            padding: this.styles.padding,
            overflow: this.styles.overflow,
        });

        // Append to the body
        $body.append($ul);
    }
}

export default MenuBuilder;



