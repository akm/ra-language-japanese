module.exports = {
    ra: {
        action: {
            add_filter: 'フィルタを追加',
            add: '追加',
            back: '戻る',
            bulk_actions: '%{smart_count}件選択済み',
            cancel: 'キャンセル',
            clear_input_value: '値をクリア',
            clone: '複製',
            create: '登録',
            delete: '削除',
            edit: '編集',
            export: 'エクスポート',
            list: '一覧',
            refresh: '最新を表示',
            remove_filter: 'フィルタを削除',
            remove: '削除',
            save: '保存',
            search: '検索',
            show: '表示',
            sort: 'ソート',
            undo: 'やり直し',
        },
        boolean: {
            true: 'はい',
            false: 'いいえ',
        },
        page: {
            create: '%{name}登録',
            dashboard: 'ダッシュボード',
            edit: '%{name} #%{id}',
            error: 'エラーが発生しました',
            list: '%{name}一覧',
            loading: '読み込み中',
            not_found: '見つかりませんでした',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'アップロードするファイルをドロップするか、クリックして選択してください。',
                upload_single: 'アップロードするファイルをドロップするか、クリックして選択してください。',
            },
            image: {
                upload_several:
                    'アップロードする画像をドロップするか、クリックして選択してください。',
                upload_single:
                    'アップロードする画像をドロップするか、クリックして選択してください。',
            },
            references: {
                all_missing: '参照するデータが見つかりませんでした。',
                many_missing:
                    '少なくとも１つの利用可能な関連する参照が見つかりませんでした。',
                single_missing:
                    '利用可能な関連する参照が見つかりませんでした。',
            },
        },
        message: {
            about: 'について',
            are_you_sure: '本当によろしいですか？',
            bulk_delete_content:
                'この %{name}を削除して本当によろしいですか？ |||| これら%{smart_count}件を削除して本当によろしいですか？',
            bulk_delete_title:
                '%{name}を削除します |||| %{smart_count}件の%{name}を削除します',
            delete_content: 'このデータを削除して本当によろしいですか？',
            delete_title: '%{name} #%{id}を削除します',
            details: '詳細',
            error:
                "クライアントエラーが発生し、処理は完了しませんでした。",
            invalid_form: 'このフォームは正しくありません。エラーをチェックしてください。',
            loading: 'ページの読み込み中です、少々お待ち下さい。',
            no: 'いいえ',
            not_found:
                '間違っているURLを入力したか、間違ったリンクを使っています。',
            yes: 'はい',
        },
        navigation: {
            no_results: '結果が見つかりませんでした',
            no_more_results:
                'ページ番号 %{page} は見つかりませんでした。前のページに戻ってください。',
            page_out_of_boundaries: 'ページ番号 %{page} は見つかりませんでした。',
            page_out_from_end: '最終ページ以降を開くことはできません',
            page_out_from_begin: '1ページ以前を開くことはできません',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: 'ページ当たりの行数:',
            next: '次',
            prev: '前',
        },
        auth: {
            user_menu: 'プロファイル',
            username: 'ユーザー名',
            password: 'パスワード',
            sign_in: 'サインイン',
            sign_in_error: '認証に失敗しました。もう一度お試しください。',
            logout: 'サインアウト',
        },
        notification: {
            updated: '要素が更新されました |||| %{smart_count} 個の要素が更新されました',
            created: '要素が登録されました',
            deleted: '要素が削除されました |||| %{smart_count} 個の要素が削除されました',
            bad_item: '不正な要素',
            item_doesnt_exist: '要素が存在しません',
            http_error: 'サーバ通信エラー',
            data_provider_error:
                'データプロバイダーエラー。詳細はコンソールを確認してください。',
            canceled: '操作はキャンセルされました',
        },
        validation: {
            required: '必須です',
            minLength: '%{min}文字以上でなければなりません',
            maxLength: '%{max}文字以下でなければなりません',
            minValue: '%{min}以上でなければなりません',
            maxValue: '%{max}以下でなければなりません',
            number: '数でなければなりません',
            email: '正しいメールアドレスでなければなりません',
            oneOf: '%{options}の中のいずれかでなければなりません',
            regex: '正規表現%{pattern}に該当しなければなりません',
        },
    },
};
