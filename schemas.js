const {gql} =  require("apollo-server")

module.exports = gql`
    scalar Date
    scalar DateTime
    scalar Time
    scalar Ym


    #保険区分
    enum InsDiv {
        #介護保険
        NURSING_INS
        #総合事業
        GENERAL_BUSINESS
        #自費
        OWN_EXPENSE
        #体験
        TRIAL
    }

    #権限
    enum Role{
        #システム管理者
        ADMINISTRATOR
        #法人管理者
        CORP_ADMIN
        #施設管理者
        FACILITY_ADMIN
        #一般
        GENERAL
    }

    #役職
    enum Job{
        #介護士
        CARE_WORKER
        #生活相談員
        LIFE_COUNSELOR
        #看護職
        NURSE
        #管理者
        ADMIN
        #その他
        OTHERS
    }

    #性別
    enum Sex{
        #男性
        MALE
        #女性
        FEMALE
    }

    #日常生活自立度
    enum IndLv{
        #ランクJ（何らかの障害等を有するが、日常生活はほぼ自立しており独力で外出する）
        LANK_J
        #ランクA（屋内での生活はおおむね自立しているが、介助なしには外出しない）
        LANK_A
        #ランクB（屋内での生活は何らかの介助を要し、日中もベット上での生活が主体であるが、座位を保つ）
        LANK_B
        #ランクC（1日中ベット上で過ごし、排泄、食事、着替において介助を要する）
        LANK_C
    }

    #介護度
    enum CareLv{
        #要支援1
        SUPPORT_REQUIRED_1
        #要支援2
        SUPPORT_REQUIRED_2
        #要介護1
        NURSING_REQUIRED_1
        #要介護2
        NURSING_REQUIRED_2
        #要介護3
        NURSING_REQUIRED_3
        #要介護4
        NURSING_REQUIRED_4
        #要介護5
        NURSING_REQUIRED_5
    }

    #認知症高齢者自立度
    enum IndLvOfDem{
        #1 （何らかの認知症を有するが、日常生活は家庭内及び社会的にほぼ自立している。）
        LV_1
        #2 （日常生活に支障を来たすような症状・行動や意思疎通の困難さが多少見られても、誰かが注意していれば自立できる。）
        LV_2
        #2a（家庭外で上記2の状態がみられる。）
        LV_2A
        #2b（家庭内でも上記2の状態がみられる。）
        LV_2B
        #3 （日常生活に支障を来たすような症状・行動や意思疎通の困難さが見られ、介護を必要とする。）
        LV_3
        #3a（日中を中心として上記の状態が見られる。）
        LV_3A
        #3b（夜間を中心として上記の3の状態が見られる。）
        LV_3B
        #4 （日常生活に支障を来たすような症状・行動や意思疎通の困難さが頻繁に見られ、常に介護を必要とする。）
        LV_4
        #M （著しい精神症状や周辺症状あるいは重篤な身体疾患が見られ、専門医療を必要とする。）
        LV_M
    }

    #お休み理由
    enum AbsentReason {
        #入院
        HOSPITALIZATION
        #通院
        ATTEND_A_HOSPITAL
        #静養
        REST
        #その他
        OTHERS
    }

    #曜日
    enum WeekDay{
        SUN
        MON
        TUE
        WED
        THU
        FRI
        SAT
    }

    #業務ノートカテゴリー（略）
    enum WorkNoteCategory{
        MEAL
        #...
    }

    #バイタル区分
    enum VitalDiv{
        #体温
        TEMPLATURE
        #脈拍
        PULSE
        #血圧
        BLOOD
        #体重
        WEIGHT
    }

    #短期目標期間期限
    enum ShortGoalDiv{
        #期限内
        VALID
        #期限が近い
        APPROACHING
        #期限切れ
        EXPIRED
    }

    #自立動作
    enum SelfSupport{
        #自立
        INDEPENDENT
        #見守り
        WATCH
        #声掛け
        CALL
        #一部介助
        PART_ASSIST
        #全介助
        ALL_ASSIST
    }

    #歩行補助具
    enum WalkingAid{
        #独歩
        ALONE
        #杖
        CANE
        #歩行器
        WALKER
        #車椅子
        WHEELCHAIR
        #その他
        OTHERS
    }

    #主食
    enum StapleFood{
        #普通
        NORMAL
        #軟飯
        SOFT
        #粥食
        GRUEL
        #その他
        OTHERS
    }

    #副食
    enum SideDish{
        #普通
        NORMAL
        #一口大
        BITE_SIZE
        #キザミ
        CHOPPED
        #ペースト
        PASTE
        #その他
        OTHERS
    }

    #履物
    enum Wear{
        #布パンツ
        CLOTH
        #紙パンツ
        PAPER
        #パット
        PAT
        #おむつ
        DIAPERS
    }

    #トイレ
    enum Toilet{
        #トイレ
        TOILET
        #ポータブルトイレ
        PORTABLE_TOILET
        #おむつ
        DIAPERS
    }

    #意識
    enum Consciousness{
        #あり
        CONSCIOUS
        #あいまい
        AMBIGOUS
        #なし
        UNCONSCIOUS
        #不明
        UNKNOWN
    }

    #視力
    enum Eyesight{
        #普通
        NORMAL
        #弱視（1m）
        AMBLYOPIA
        #弱視（目の前）
        RIGHT_BEFORE
        #殆ど見えない
        ALMOST_INVISIBLE
    }

    #聴力
    enum Hearing{
        #普通
        NORMAL
        #やや難
        LITTLE_DEAFNESS
        #難聴
        DEAFNESS
    }

    #補聴器
    enum HearingAid{
        #左右
        LR
        #左
        L
        #右
        R
        #なし
        NONE
        #不明
        UNKNOWN
    }

    #義歯
    enum Denture{
        #上下
        UP_DOWN
        #上
        UP
        #下
        DOWN
        #部分
        PART
        #なし
        NONE
        #不明
        UNKNOWN
    }

    #できる/できない
    enum Ablility{
        #できる
        CAPABLE
        #時々
        SOMETIMES
        #ほとんどできない
        LITTLE
        #できない
        INCOMPENTENCE
        #不明
        UNKNOWN
    }

    #睡眠状況
    enum Sleeping{
        #良眠
        GOOD
        #浅眠
        BAD
        #不眠
        INSOMNIA
        #不明
        UNKNOWN
    }

    #Connectionタイプ用共通ページ情報
    type PageInfo{
        endCursor:String
        hasNextPage:Boolean
        hasPreviousPage:Boolean
        startCursor:String
    }

    #法人マスタ
    type Corp{
        id: Int
        name:String
        address:String
        tel:String
        note:String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #施設マスタ
    type Facility{
        id:Int
        corp:Corp
        name:String
        address:String
        tel:String
        note:String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #アカウントマスタ
    type Account{
        id: Int
        facility:Facility
        loginId:String
        email:String
        role:Role
        inactive:Boolean
        createdOn:DateTime
        updatedOn:DateTime
    }

    #スタッフマスタ
    type Staff{
        id: Int
        facility: Facility
        sei : String
        mei:String
        fullName:String
        seiRuby:String
        meiRuby:String
        fullNameRuby:String
        job:Job
        note:String
        hidden:Boolean
        createdOn:DateTime
        updatedOn:DateTime
    }

    #利用者マスタ
    type User{
        id : Int
        facility: Facility
        sei : String
        mei:String
        #フルネーム（姓名から算出）
        fullName:String
        seiRuby:String
        meiRuby:String
        #フルネームかな（せいめいから算出）
        fullNameRuby:String
        birthday:Date
        #年齢（生年月日から算出）
        age:Int
        sex:Sex
        startDate:Date
        shortGoalTerm:Date
        #短期目標期間から算出
        shortGoalDiv:ShortGoalDiv
        address:String
        tel:String
        indLv:IndLv
        careLv:CareLv
        indLvOfDem:IndLvOfDem
        insDiv:InsDiv
        prov:Boolean
        usualStartTime:Time
        usualEndTime:Time
        familyMakeup:String
        medsHistory:String
        medsInfo:String
        lifeStyle:String
        keyPerson1Name:String
        keyPerson1Tel:String
        keyPerson1Address:String
        keyPerson2Name:String
        keyPerson2Tel:String
        keyPerson2Address:String
        hospital1Name:String
        hospital1Tel:String
        hospital2Name:String
        hospital2Tel:String
        lifeIntentionsSelf:String
        lifeIntentionsFamily:String
        task:String
        note:String
        hidden:Boolean
        latestAdl:Adl
        createdOn:DateTime
        updatedOn:DateTime
    }

    #ADLデータ
    type Adl{
        id: Int
        regDate:Date
        user: User
        moving:[SelfSupport]
        walkingAid:WalkingAid
        movingNote:String
        meal:[SelfSupport]
        stapleFood:StapleFood
        sideDish:SideDish
        likesAndDislikes:Boolean
        likesAndDislikesNote:String
        aspTend:Boolean
        aspTendNote:String
        taboo:Boolean
        tabooNote:String
        mealNote:String
        wear:[Wear]
        toiletDay:Toilet
        toiletNight:Toilet
        urination:[SelfSupport]
        desireToUrinate:Consciousness
        defecation:[SelfSupport]
        desireToDefecate:Consciousness
        excretionNote:String
        changeOfClothes:[SelfSupport]
        hairWash:[SelfSupport]
        bodyWash:[SelfSupport]
        bathingMeds:Boolean
        bathingNote:String
        oralCare:[SelfSupport]
        oralCareNote:String
        physicalTaboo:Boolean
        physicalTabooNote:String
        eyesight:Eyesight
        glasses:Boolean
        hearing:Hearing
        hearingAid:HearingAid
        denture:Denture
        skinDesease:Boolean
        skinDeseaseNote:String
        paralysis:Boolean
        paralysisNote:String
        physicalNote:String
        communication:Ablility
        demantia:Boolean
        demantiaNote:String
        communicationNote:String
        sleeping:Sleeping
        sleepingNote:String
        note:String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #ADLコネクション
    type AdlConnection{
        edges: [AdlEdge]
        nodes:[Adl]
        pageInfo:PageInfo!
    }

    #ADLエッジ
    type AdlEdge{
        cursor:String
        node:Adl
    }

    #スケジュール
    type Schedule{
        id:Int
        user:User
        dateFrom:Date
        dateTo:Date
        weekDays:[WeekDay]
        insDiv:InsDiv
        bathing:Boolean
        training:Boolean
        oralCare:Boolean
        createdOn:DateTime
        updatedOn:DateTime
    }

    #施設スケジュール用の特定日付利用予定人数
    type PlanedUserCount{
        date:Date
        planedUserCount:Int
    }

    #ケア実施記録
    type CareRecord{
        id:ID
        user:User
        regDate:Date
        schedule:Schedule
        insDiv:InsDiv
        comming:Boolean
        commingTime:Time
        absentReason:AbsentReason
        leavingTime:Time
        extension:Boolean
        pickUp:Boolean
        sendOff:Boolean
        bathing:Boolean
        lunch:Boolean
        diner:Boolean
        medicine:Boolean
        training:Boolean
        oralCare:Boolean
        createdOn:DateTime
        updatedOn:DateTime
    }

    #表示されるケア実施記録の行情報
    type CareRecordRow{
        careRecord:CareRecord
        latestTemplature:Vital
        latestPulse:Vital
        latestBlood:Vital
        latestWeight:Vital
        latestWorkNote:WorkNote
    }

    #バイタルデータ
    type Vital{
        id:ID
        user:User
        regDate:Date
        regTime:Time
        vitalDiv: VitalDiv
        data1:Float
        #data2は血圧のときにしか使わないのでunion等で分けてもいいかも
        date2:Float
        createdOn:DateTime
        updatedOn:DateTime
    }

    #データ集計
    type AggregateData{
        summary: AggregateDataSummary
        nodes: [CareRecord]
    }

    #データ集計における、その月の合計値
    type AggregateDataSummary{
        insDivCounts:[InsDivCount]
        commingCount:Int
        extensionCount:Int
        pickUpCount:Int
        sendOffCount:Int
        bathingCount:Int
        lunchCount:Int
        dinerCount:Int
        medicineCount:Int
        trainingCount:Int
        oralCareCount:Int
    }

    #保険区分ごとの利用回数
    type InsDivCount{
        insDiv:InsDiv
        count:Int
    }

    #業務ノートコネクション
    type WorkNoteConnection{
        edges:[WorkNoteEdge]
        nodes:[WorkNote]
        pageInfo:PageInfo!
    }

    #業務ノートエッジ
    type WorkNoteEdge{
        cursor:String
        node:WorkNote
    }

    #業務ノート
    type WorkNote{
        id:ID
        user:User
        staff:Staff
        regDate:Date
        regTime:Time
        category:WorkNoteCategory
        content:String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #業務日誌コネクション
    type WorkDiaryConnection{
        edges:[WorkDiaryEdge]
        nodes:[WorkDiary]
        pageInfo:PageInfo!
    }

    #業務日誌エッジ
    type WorkDiaryEdge{
        cursor:String
        node:WorkDiary
    }

    #業務日誌（略）
    type WorkDiary{
        id:ID
        facility:Facility
        regDate: Date
        servise:String
        meeting:String
        note:String
        transfer:[WorkDiaryTransfer]
        createdOn:DateTime
        updatedOn:DateTime
        #...その日の集計データ
    }

    #業務日誌内、車ごとの着発情報
    type WorkDiaryTransfer{
        id:ID
        orderNumber:Int
        carType:String
        arrivalTime:Time
        departureTime:Time
    }

    #個別ケースコネクション
    type IndivCaseConnection{
        edges:[IndivCaseEdge]
        nodes:[IndivCase]
        pageInfo:PageInfo!
    }

    #個別ケースエッジ
    type IndivCaseEdge{
        cursor:String
        node:IndivCase
    }

    #個別ケース
    type IndivCase{
        id:ID
        user:User
        regDate:Date
        careNote:String
        nursingNote:String
        createdOn:DateTime
        updatedOn:DateTime
        careRecordRow:CareRecordRow #この使い方を考えると名前を変えたほうがよさそう
    }

    #連絡ノートコネクション
    type ContactNoteConnection{
        edges:[ContactNoteEdge]
        nodes:[ContactNote]
        pageInfo:PageInfo!
    }

    #連絡ノートエッジ
    type ContactNoteEdge{
        cursor:String
        node:ContactNote
    }

    #連絡ノート
    type ContactNote{
        id:ID
        user:User
        regDate:Date
        staff:Staff
        note:String
        createdOn:DateTime
        updatedOn:DateTime
        careRecordRow:CareRecordRow
    }

    #バイタル数値表一覧用のサマリー
    type VitalSummary{
        user:User
        maxTemplature:Float
        minTemplature:Float
        maxPuls:Int
        minPuls:Int
        maxTopBood:Int
        minTopBood:Int
        maxBottomBood:Int
        minBottomBood:Int
        latestWeight:Float
    }

    #業務ノートテンプレート設定
    type WorkNoteTemplate{
        id:ID
        facility:Facility
        category:WorkNoteCategory
        orderNumber:Int
        template:String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #業務日誌車種設定
    type WorkDiaryCarType{
        id:ID
        facility:Facility
        orderNumber:Int
        carType: String
        createdOn:DateTime
        updatedOn:DateTime
    }

    #業務日誌サービス内容テンプレート設定
    type WorkDiaryServiceTemplate{
        id:ID
        facility:Facility
        orderNumber:Int
        template:String
        createdOn:DateTime
        updatedOn:DateTime
    }



    type Query{
        #法人マスタ一覧
        corps:[Corp]
        #法人マスタシングル
        corp(id:Int):Corp
        #施設マスタ一覧
        facilities:[Facility]
        #施設マスタシングル
        facility(id:Int):Facility
        #アカウントマスタ一覧
        accounts(inactive:Boolean):[Account]
        #アカウントマスタシングル
        account(id:Int):Account
        #スタッフマスタ一覧
        staffs(hidden:Boolean):[Staff]
        #スタッフマスタシングル
        staff(id:Int):Staff
        #利用者マスタ一覧
        users(hidden:Boolean):[User]
        #利用者マスタシングル
        user(id:Int):User
        #ADLデータ一覧
        userAdls(userId:Int,first:Int,after:String):AdlConnection
        #ADLデータシングル
        userAdl(id:Int):Adl
        #ケア実施記録
        careRecords(regDate:Date): [CareRecordRow]
        #バイタル
        vitals(regDate:Date,userId:Int,vitalDiv:VitalDiv):[Vital]
        #1ヶ月の施設スケジュール
        facilityMonthlySchedule(ym:Ym):[PlanedUserCount]
        #1ヶ月の利用者スケジュール
        userMonthlySchedule(ym:Ym,userId:Int):[CareRecord]
        #1日の利用者一覧
        dailyScheduledUsers(date:Date):[User]
        #スケジュールシングル
        schedule(id:Int):Schedule
        #業務ノート一覧
        workNotes(regDate:Date,userId:Int,category:WorkNoteCategory,freeWord:String,first:Int,after:String):WorkNoteConnection
        #業務ノートシングル
        workNote(id:Int):WorkNote
        #業務ノートテンプレート
        workNoteTemplate(category:WorkNoteCategory):WorkNoteTemplate
        #データ集計
        aggregateData(userId:Int,ym:Ym):AggregateData
        #業務日誌一覧
        workDiaries(regDate:Date,first:Int,after:String):WorkDiaryConnection
        #業務日誌シングル
        workDiary(id:Int):WorkDiary
        #業務日誌車種設定
        workDiaryCarTypes:[WorkDiaryCarType]
        #業務日誌サービス内容テンプレート設定
        workDiaryServiceTemplates:[WorkDiaryServiceTemplate]
        #バイタル数値表個別
        vitalNumSheet(ym:Ym,userId:Int):[Vital]
        #バイタル数値表一覧
        vitalNumListSheet(ym:Ym):[VitalSummary]
        #個別ケース一覧
        indivCases(regDate:Date,first:Int,after:String):IndivCaseConnection
        #個別ケースシングル
        indivCase(id:Int):IndivCase
        #個別ケース印刷データ
        indivCaseSheet(ymFrom:Ym,ymTo:Ym,userId:Int):[IndivCase]
        #連絡ノート一覧
        contactNotes(regDate:Date,userId:Int,first:Int,after:String):ContactNoteConnection
        #連絡ノートシングル
        contactNote(id:Int):ContactNote
        #連絡ノート印刷データ
        contactNoteSheet(regDate:Date):[ContactNote]
    }

    type Mutation {
        #ログイン処理（Token不要）
        login(input:LoginInput):LoginPayload
        #ログアウト（Token不要）
        logout(input:Boolean):Boolean
        #パスワードリセットリンク送信（Token不要）
        sendPasswordResetLink(input:SendPasswordResetLinkInput):SendPasswordResetLinkPayload
        #パスワードリセット（Token不要）
        resetPassword(input:ResetPasswordInput):Boolean
        #法人マスタ新規登録
        createCorp(input:CreateCorpInput):CreateCorpPayload
        #法人マスタ修正
        updateCorp(input:UpdateCorpInput):UpdateCorpPayload
        #法人マスタ削除
        deleteCorp(input:DeleteCorpInput):DeleteCorpPayload
        #施設マスタ新規登録
        createFacility(input:CreateFacilityInput):CreateFacilityPayload
        #施設マスタ修正
        updateFacility(input:UpdateFacilityInput):UpdateFacilityPayload
        #施設マスタ削除
        deleteFacility(input:DeleteFacilityInput):DeleteFacilityPayload
        #スタッフマスタCSVインポート
        importStaffCsv(input:ImportStaffCsv):Boolean
        #利用者マスタCSVインポート
        importUserCsv(input:ImportUserCsv):Boolean
        #業務ノートテンプレートCSVインポート
        importWorkNoteTemplateCsv(input:ImportWorkNoteTemplateCsv):Boolean
        #スタッフマスタ新規登録
        createStaff(input:CreateStaffInput):CreateStaffPayload
        #スタッフマスタ修正
        updateStaff(input:UpdateStaffInput):UpdateStaffPayload
        #スタッフマスタ削除
        deleteStaff(input:DeleteStaffInput):DeleteStaffPayload
        #利用者マスタ新規登録
        createUser(input:CreateUserInput):CreateUserPayload
        #利用者マスタ修正
        updateUser(input:UpdateUserInput):UpdateUserPayload
        #利用者マスタ削除
        deleteUser(input:DeleteUserInput):DeleteUserPayload
        #ADLデータ新規登録
        createAdl(input:CreateAdlInput):CreateAdlPayload
        #ADLデータ修正
        updateAdl(input:UpdateAdlInput):UpdateAdlPayload
        #ADLデータ削除
        deleteAdl(input:DeleteAdlInput):DeleteAdlPayload
        #ケア実施記録登録
        logCareRecord(input:LogCareRecordInput):LogCareRecordPayload
        #バイタル記錄登録
        logVitals(input:LogVitalsInput):LogVitalsPayload
        #バイタル記錄修正
        updateVitals(input:UpdateVitalsInput):UpdateVitalsPayload
        #バイタル記錄削除
        deleteVitals(input:DeleteVitalsInput):DeleteVitalsPayload
        #スケジュール新規登録
        createSchedule(input:CreateScheduleInput):CreateSchedulePayload
        #スケジュール修正
        updateSchedule(input:UpdateScheduleInput):UpdateSchedulePayload
        #スケジュール削除
        deleteSchedule(input:DeleteScheduleInput):DeleteSchedulePayload
        #業務ノート新規登録
        createWorkNote(input:CreateWorkNoteInput):CreateWorkNotePayload
        #業務ノート修正
        updateWorkNote(input:UpdateWorkNoteInput):UpdateWorkNotePayload
        #業務ノート削除
        deleteWorkNote(input:DeleteWorkNoteInput):DeleteWorkNotePayload
        #業務ノートテンプレート新規登録
        createWorkNoteTemplate(input:CreateWorkNoteTemplateInput):CreateWorkNoteTemplatePayload
        #業務ノートテンプレート内容修正
        updateWorkNoteTemplateContent(input:UpdateWorkNoteTemplateContentInput):UpdateWorkNoteTemplateContentPayload
        #業務ノートテンプレート並び替え
        sortWorkNoteTemplateContent(input:SortWorkNoteTemplateContentInput):SortWorkNoteTemplateContentPayload
        #業務ノートテンプレート削除
        deleteWorkNoteTemplateContent(input:DeleteWorkNoteTemplateContentInput):DeleteWorkNoteTemplateContentPayload
        #業務日誌新規登録
        createWorkDiary(input:CreateWorkDiaryInput):CreateWorkDiaryPayload
        #業務日誌修正
        updateWorkDiary(input:UpdateWorkDiaryInput):UpdateWorkDiaryPayload
        #業務日誌削除
        deleteWorkDiary(input:DeleteWorkDiaryInput):DeleteWorkDiaryPayload
        #業務日誌車種設定
        setWorkDiaryCarType(input:SetWorkDiaryCarTypeInput):SetWorkDiaryCarTypePayload
        #業務日誌サービス内容テンプレート新規登録
        createWorkDiaryServiceTemplate(input:CreateWorkDiaryServiceTemplateInput):CreateWorkDiaryServiceTemplatePayload
        #業務日誌サービス内容テンプレート内容修正
        updateWorkDiaryServiceTemplateContent(input:UpdateWorkDiaryServiceTemplateContentInput):UpdateWorkDiaryServiceTemplateContentPayload
        #業務日誌サービス内容テンプレート並び替え
        sortWorkDiaryServiceTemplate(input:SortWorkDiaryServiceTemplateInput):SortWorkDiaryServiceTemplatePayload
        #業務日誌サービス内容テンプレート削除
        deleteWorkDiaryServiceTemplate(input:DeleteWorkDiaryServiceTemplateInput):DeleteWorkDiaryServiceTemplatePayload
        #個別ケース新規登録
        createIndivCase(input:CreateIndivCaseInput):CreateIndivCasePayload
        #個別ケース修正
        updateIndivCase(input:UpdateIndivCaseInput):UpdateIndivCasePayload
        #個別ケース削除
        deleteIndivCase(input:DeleteIndivCaseInput):DeleteIndivCasePayload
        #連絡ノート新規登録
        createContactNote(input:CreateContactNoteInput):CreateContactNotePayload
        #連絡ノート修正
        updateContactNote(input:UpdateContactNoteInput):UpdateContactNotePayload
        #連絡ノート削除
        deleteContactNote(input:DeleteContactNoteInput):DeleteContactNotePayload
    }

    #ログインパラメータ
    input LoginInput{
        loginId:String
        password:String
    }

    #ログインペイロード
    type LoginPayload{
        #仮
        token:String
        clientMutationId:String
    }

    #パスワードリセットリンク送信パラメータ
    input SendPasswordResetLinkInput{
        loginId:String
    }

    #パスワードリセットリンク送信ペイロード
    type SendPasswordResetLinkPayload{
        loginId:String
        clientMutationId:String
    }

    #パスワードリセットパラメータ
    input ResetPasswordInput{
        newPassword:String
    }

    #法人マスタ新規登録パラメータ
    input CreateCorpInput{
        name:String
        address:String
        tel:String
        note:String
    }

    #法人マスタ新規登録ペイロード
    type CreateCorpPayload{
        clientMutationId:String
        corp:Corp
    }

    #法人マスタ修正パラメータ
    input UpdateCorpInput{
        id:Int
        name:String
        address:String
        tel:String
        note:String
    }

    #法人マスタ修正ペイロード
    type UpdateCorpPayload{
        clientMutationId:String
        corp:Corp
    }

    #法人マスタ削除パラメータ
    input DeleteCorpInput{
        id:Int
    }

    #法人マスタ削除ペイロード
    type DeleteCorpPayload{
        clientMutationId:String
        deletedId:ID
        corp:Corp
    }

    #施設マスタ新規登録パラメータ
    input CreateFacilityInput{
        name:String
        corpId:Int
        address:String
        tel:String
        note:String
    }

    #施設マスタ新規登録ペイロード
    type CreateFacilityPayload{
        clientMutationId:String
        facility:Facility
    }

    #施設マスタ修正パラメータ
    input UpdateFacilityInput{
        id:Int
        name:String
        corpId:Int
        address:String
        tel:String
        note:String
    }

    #施設マスタ修正ペイロード
    type UpdateFacilityPayload{
        clientMutationId:String
        facility:Facility
    }

    #施設マスタ削除パラメータ
    input DeleteFacilityInput{
        id:Int
    }

    #施設マスタ削除ペイロード
    type DeleteFacilityPayload{
        clientMutationId:String
        deletedId:ID
        facility:Facility
    }

    #スタッフCSVインポートパラメータ
    input ImportStaffCsv{
        facilityId:Int
        content:String
    }

    #利用者CSVインポートパラメータ
    input ImportUserCsv{
        facilityId:Int
        content:String
    }

    #業務ノートテンプレートCSVインポートパラメータ
    input ImportWorkNoteTemplateCsv{
        facilityId:Int
        content:String
    }

    #スタッフマスタ新規登録パラメータ
    input CreateStaffInput{
        sei:String
        mei:String
        seiRuby:String
        meiRuby:String
        job:Job
        note:String
    }

    #スタッフマスタ新規登録ペイロード
    type CreateStaffPayload{
        clientMutationId:String
        staff:Staff
    }

    #スタッフマスタ修正パラメータ
    input UpdateStaffInput{
        id:Int
        sei:String
        mei:String
        seiRuby:String
        meiRuby:String
        job:Job
        note:String
        hidden:Boolean
    }

    #スタッフマスタ修正ペイロード
    type UpdateStaffPayload{
        clientMutationId:String
        staff:Staff
    }

    #スタッフマスタ削除パラメータ
    input DeleteStaffInput{
        id:Int
    }

    #スタッフマスタ削除ペイロード
    type DeleteStaffPayload{
        clientMutationId:String
        deletedId:ID
        staff:Staff
    }

    #利用者マスタ新規登録パラメータ
    input CreateUserInput{
        sei : String
        mei:String
        seiRuby:String
        meiRuby:String
        birthday:Date
        sex:Sex
        startDate:Date
        shortGoalTerm:Date
        address:String
        tel:String
        indLv:IndLv
        careLv:CareLv
        indLvOfDem:IndLvOfDem
        insDiv:InsDiv
        prov:Boolean
        usualStartTime:Time
        usualEndTime:Time
        familyMakeup:String
        medsHistory:String
        medsInfo:String
        lifeStyle:String
        keyPerson1Name:String
        keyPerson1Tel:String
        keyPerson1Address:String
        keyPerson2Name:String
        keyPerson2Tel:String
        keyPerson2Address:String
        hospital1Name:String
        hospital1Tel:String
        hospital2Name:String
        hospital2Tel:String
        lifeIntentionsSelf:String
        lifeIntentionsFamily:String
        task:String
        note:String
    }

    #利用者マスタ新規登録ペイロード
    type CreateUserPayload{
        clientMutationId:String
        user:User
    }

    #利用者マスタ修正パラメータ
    input UpdateUserInput{
        id:Int
        sei : String
        mei:String
        seiRuby:String
        meiRuby:String
        birthday:Date
        sex:Sex
        startDate:Date
        shortGoalTerm:Date
        address:String
        tel:String
        indLv:IndLv
        careLv:CareLv
        indLvOfDem:IndLvOfDem
        insDiv:InsDiv
        prov:Boolean
        usualStartTime:Time
        usualEndTime:Time
        familyMakeup:String
        medsHistory:String
        medsInfo:String
        lifeStyle:String
        keyPerson1Name:String
        keyPerson1Tel:String
        keyPerson1Address:String
        keyPerson2Name:String
        keyPerson2Tel:String
        keyPerson2Address:String
        hospital1Name:String
        hospital1Tel:String
        hospital2Name:String
        hospital2Tel:String
        lifeIntentionsSelf:String
        lifeIntentionsFamily:String
        task:String
        note:String
        hidden:Boolean
    }

    #利用者マスタ修正ペイロード
    type UpdateUserPayload{
        clientMutationId:String
        user:User
    }


    #利用者マスタ削除パラメータ
    input DeleteUserInput{
        id:Int
    }

    #利用者マスタ削除ペイロード
    type DeleteUserPayload{
        clientMutationId:String
        deletedId:ID
        user:User
    }

    #ADLデータ新規登録パラメータ
    input CreateAdlInput{
        regDate:Date
        userId: Int
        moving:[SelfSupport]
        walkingAid:WalkingAid
        movingNote:String
        meal:[SelfSupport]
        stapleFood:StapleFood
        sideDish:SideDish
        likesAndDislikes:Boolean
        likesAndDislikesNote:String
        aspTend:Boolean
        aspTendNote:String
        taboo:Boolean
        tabooNote:String
        mealNote:String
        wear:[Wear]
        toiletDay:Toilet
        toiletNight:Toilet
        urination:[SelfSupport]
        desireToUrinate:Consciousness
        defecation:[SelfSupport]
        desireToDefecate:Consciousness
        excretionNote:String
        changeOfClothes:[SelfSupport]
        hairWash:[SelfSupport]
        bodyWash:[SelfSupport]
        bathingMeds:Boolean
        bathingNote:String
        oralCare:[SelfSupport]
        oralCareNote:String
        physicalTaboo:Boolean
        physicalTabooNote:String
        eyesight:Eyesight
        glasses:Boolean
        hearing:Hearing
        hearingAid:HearingAid
        denture:Denture
        skinDesease:Boolean
        skinDeseaseNote:String
        paralysis:Boolean
        paralysisNote:String
        physicalNote:String
        communication:Ablility
        demantia:Boolean
        demantiaNote:String
        communicationNote:String
        sleeping:Sleeping
        sleepingNote:String
        note:String
    }

    #ADLデータ新規登録ペイロード
    type CreateAdlPayload{
        clientMutationId:String
        adl:Adl
    }

    #ADLデータ修正パラメータ
    input UpdateAdlInput{
        id:Int
        regDate:Date
        moving:[SelfSupport]
        walkingAid:WalkingAid
        movingNote:String
        meal:[SelfSupport]
        stapleFood:StapleFood
        sideDish:SideDish
        likesAndDislikes:Boolean
        likesAndDislikesNote:String
        aspTend:Boolean
        aspTendNote:String
        taboo:Boolean
        tabooNote:String
        mealNote:String
        wear:[Wear]
        toiletDay:Toilet
        toiletNight:Toilet
        urination:[SelfSupport]
        desireToUrinate:Consciousness
        defecation:[SelfSupport]
        desireToDefecate:Consciousness
        excretionNote:String
        changeOfClothes:[SelfSupport]
        hairWash:[SelfSupport]
        bodyWash:[SelfSupport]
        bathingMeds:Boolean
        bathingNote:String
        oralCare:[SelfSupport]
        oralCareNote:String
        physicalTaboo:Boolean
        physicalTabooNote:String
        eyesight:Eyesight
        glasses:Boolean
        hearing:Hearing
        hearingAid:HearingAid
        denture:Denture
        skinDesease:Boolean
        skinDeseaseNote:String
        paralysis:Boolean
        paralysisNote:String
        physicalNote:String
        communication:Ablility
        demantia:Boolean
        demantiaNote:String
        communicationNote:String
        sleeping:Sleeping
        sleepingNote:String
        note:String
    }

    #ADLデータ修正ペイロード
    type UpdateAdlPayload{
        clientMutationId:String
        adl:Adl
    }

    #ADLデータ削除パラメータ
    input DeleteAdlInput{
        id:Int
    }

    #ADLデータ削除ペイロード
    type DeleteAdlPayload{
        clientMutationId:String
        deletedId:ID
        adl:Adl
    }

    #ケア実施記録登録パラメータ
    input LogCareRecordInput{
        ids:[Int]
        insDiv:InsDiv
        comming:Boolean
        commingTime:Time
        absentReason:AbsentReason
        leavingTime:Time
        extention:Boolean
        pickUp:Boolean
        sendOff:Boolean
        bathing:Boolean
        lunch:Boolean
        diner:Boolean
        medicine:Boolean
        training:Boolean
        oralCare:Boolean
    }

    #ケア実施記録登録ペイロード
    type LogCareRecordPayload{
        clientMutationId:String
        careRecords:[CareRecord]
    }

    #バイタル記錄登録パラメータ
    input LogVitalsInput{
        userId:Int
        regDate:Date
        regTime:Time
        vitals: [VitalInput]
    }

    #各バイタルデータ詳細
    input VitalInput{
        vitalDiv:VitalDiv
        data1:Float
        data2:Float
    }

    #バイタル記錄登録ペイロード
    type LogVitalsPayload{
        clientMutationId:String
        vitals:[Vital]
    }

    #バイタル記錄修正パラメータ
    input UpdateVitalsInput{
        id:Int
        regDate:Date
        regTime:Time
        data1:Float
        data2:Float
    }

    #バイタル記錄修正ペイロード
    type UpdateVitalsPayload{
        clientMutationId:String
        vital:Vital
    }

    #バイタル記錄削除パラメータ
    input DeleteVitalsInput{
        id:Int
    }

    #バイタル記錄削除ペイロード
    type DeleteVitalsPayload{
        clientMutationId:String
        deletedId:ID
        vital:Vital
    }

    #スケジュール新規登録パラメータ
    input CreateScheduleInput{
        userId:Int
        #繰り返しスケジュールであればTrue
        repeated:Boolean
        dateFrom:Date
        dateTo:Date
        weekdays:[WeekDay]
        insDiv:InsDiv
        bathing:Boolean
        training:Boolean
        oralCare:Boolean
    }

    #スケジュール新規登録ペイロード
    type CreateSchedulePayload{
        clientMutationId:String
        schedule:Schedule
    }

    #スケジュール修正パラメータ
    input UpdateScheduleInput{
        id:Int
        date:Date
        insDiv:InsDiv
        bathing:Boolean
        training:Boolean
        oralCare:Boolean
        #この予定のみであればTrue
        thisOnly:Boolean
    }

    #スケジュール修正ペイロード
    type UpdateSchedulePayload{
        clientMutationId:String
        schedule:Schedule
    }

    #スケジュール削除パラメータ
    input DeleteScheduleInput{
        id:Int
        #この予定のみであればTrue
        thisOnly:Boolean
    }

    #スケジュール削除ペイロード
    type DeleteSchedulePayload{
        clientMutationId:String
        deletedId:ID
        schedule:Schedule
    }

    #業務ノート新規登録パラメータ
    input CreateWorkNoteInput{
        regDate:Date
        regTime:Time
        userId:Int
        staffId:Int
        category:WorkNoteCategory
        content:String
    }

    #業務ノート新規登録ペイロード
    type CreateWorkNotePayload{
        clientMutationId:String
        workNote:WorkNote
    }

    #業務ノート修正パラメータ
    input UpdateWorkNoteInput{
        id:Int
        regDate:Date
        regTime:Time
        userId:Int
        staffId:Int
        category:WorkNoteCategory
        content:String
    }

    #業務ノート修正ペイロード
    type UpdateWorkNotePayload{
        clientMutationId:String
        workNote:WorkNote
    }

    #業務ノート削除パラメータ
    input DeleteWorkNoteInput{
        id:Int
    }

    #業務ノート削除ペイロード
    type DeleteWorkNotePayload{
        clientMutationId:String
        deletedId:ID
        workNote:WorkNote
    }

    #業務ノートテンプレート新規登録パラメータ
    input CreateWorkNoteTemplateInput{
        category:WorkNoteCategory
        template:String
    }

    #業務ノートテンプレート新規登録ペイロード
    type CreateWorkNoteTemplatePayload{
        clientMutationId:String
        workNoteTemplate:WorkNoteTemplate
    }

    #業務ノートテンプレート内容修正パラメータ
    input UpdateWorkNoteTemplateContentInput{
        id:Int
        template:String
    }

    #業務ノートテンプレート内容修正ペイロード
    type UpdateWorkNoteTemplateContentPayload{
        clientMutationId:String
        workNoteTemplate:WorkNoteTemplate
    }

    #業務ノートテンプレート並び替えパラメータ
    input SortWorkNoteTemplateContentInput{
        #テンプレートの並び順でIDを受け取る
        sortedIds:[Int]
    }

    #業務ノートテンプレート並び替えペイロード
    type SortWorkNoteTemplateContentPayload{
        clientMutationId:String
        workNoteTemplates:[WorkNoteTemplate]
    }

    #業務ノートテンプレート削除パラメータ
    input DeleteWorkNoteTemplateContentInput{
        id:Int
    }

    #業務ノートテンプレート削除ペイロード
    type DeleteWorkNoteTemplateContentPayload{
        clientMutationId:String
        deletedId:ID
        workNoteTemplate:WorkNoteTemplate
    }

    #業務日誌新規登録パラメータ
    input CreateWorkDiaryInput{
        regDate:Date
        transfer:[WorkDiaryTransferInput]
        servise:String
        meeting:String
        note:String
    }

    input WorkDiaryTransferInput{
        carType:String
        arrivalTime:Time
        departureTime:Time
    }

    #業務日誌新規登録ペイロード
    type CreateWorkDiaryPayload{
        clientMutationId:String
        workDiary:WorkDiary
    }

    #業務日誌修正パラメータ
    input UpdateWorkDiaryInput{
        id:Int
        regDate:Date
        transfer:[WorkDiaryTransferInput]
        servise:String
        meeting:String
        note:String
    }

    #業務日誌修正ペイロード
    type UpdateWorkDiaryPayload{
        clientMutationId:String
        workDiary:WorkDiary
    }

    #業務日誌削除パラメータ
    input DeleteWorkDiaryInput{
        id:Int
    }

    #業務日誌削除ペイロード
    type DeleteWorkDiaryPayload{
        clientMutationId:String
        deletedId:ID
        workDiary:WorkDiary
    }

    #業務日誌車種設定パラメータ
    input SetWorkDiaryCarTypeInput{
        carTypes:[String]
    }

    #業務日誌車種設定ペイロード
    type SetWorkDiaryCarTypePayload{
        clientMutationId:String
        workDiaryCarTypes:[WorkDiaryCarType]
    }

    #業務日誌サービス内容テンプレート新規登録パラメータ
    input CreateWorkDiaryServiceTemplateInput{
        template:String
    }

    #業務日誌サービス内容テンプレート新規登録ペイロード
    type CreateWorkDiaryServiceTemplatePayload{
        clientMutationId:String
        workDiaryServiceTemplate:WorkDiaryServiceTemplate
    }

    #業務日誌サービス内容テンプレート内容修正パラメータ
    input UpdateWorkDiaryServiceTemplateContentInput{
        id:Int
        template:String
    }

    #業務日誌サービス内容テンプレート内容修正ペイロード
    type UpdateWorkDiaryServiceTemplateContentPayload{
        clientMutationId:String
        workDiaryServiceTemplate:WorkDiaryServiceTemplate
    }

    #業務日誌サービス内容テンプレート並び替えパラメータ
    input SortWorkDiaryServiceTemplateInput{
        #テンプレートの並び順でIDを受け取る
        ids:[Int]
    }

    #業務日誌サービス内容テンプレート並び替えペイロード
    type SortWorkDiaryServiceTemplatePayload{
        clientMutationId:String
        workDiaryServiceTemplates:[WorkDiaryServiceTemplate]
    }

    #業務日誌サービス内容テンプレート削除パラメータ
    input DeleteWorkDiaryServiceTemplateInput{
        id:Int
    }

    #業務日誌サービス内容テンプレート削除ペイロード
    type DeleteWorkDiaryServiceTemplatePayload{
        clientMutationId:String
        deletedId:ID
        workDiaryServiceTemplate:WorkDiaryServiceTemplate
    }

    #個別ケース新規登録パラメータ
    input CreateIndivCaseInput{
        regDate:Date
        userId:Int
        careNote:String
        nursingNote:String
    }

    #個別ケース新規登録ペイロード
    type CreateIndivCasePayload{
        clientMutationId:String
        indivCase:IndivCase
    }

    #個別ケース修正パラメータ
    input UpdateIndivCaseInput{
        id:Int
        regDate:Date
        userId:Int
        careNote:String
        nursingNote:String
    }

    #個別ケース修正ペイロード
    type UpdateIndivCasePayload{
        clientMutationId:String
        indivCase:IndivCase
    }

    #個別ケース削除パラメータ
    input DeleteIndivCaseInput{
        id:Int
    }

    #個別ケース削除ペイロード
    type DeleteIndivCasePayload{
        clientMutationId:String
        deletedId:ID
        indivCase:IndivCase
    }

    #連絡ノート新規登録パラメータ
    input CreateContactNoteInput{
        regDate:Date
        userId:Int
        staff:Int
        note:String
    }

    #連絡ノート新規登録ペイロード
    type CreateContactNotePayload{
        clientMutationId:String
        contactNote:ContactNote
    }

    #連絡ノート修正パラメータ
    input UpdateContactNoteInput{
        id:Int
        regDate:Date
        userId:Int
        staff:Int
        note:String
    }

    #連絡ノート修正ペイロード
    type UpdateContactNotePayload{
        clientMutationId:String
        contactNote:ContactNote
    }

    #連絡ノート削除パラメータ
    input DeleteContactNoteInput{
        id:Int
    }

    #連絡ノート削除ペイロード
    type DeleteContactNotePayload{
        clientMutationId:String
        deletedId:ID
        contactNote:ContactNote
    }
`;